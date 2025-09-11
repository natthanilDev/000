import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

// --- ฟังก์ชัน sanitize input ---
function sanitize(str: string) {
  return str.replace(/[\r\n<>]/g, "").trim();
}

// --- ฟังก์ชัน escape HTML (ป้องกัน XSS) ---
const escapeHTML = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// --- จำกัดความยาว input ---
const limits = {
  name: 100,
  email: 100,
  subject: 150,
  phone: 20,
  address: 400,
  message: 2000,
};

// --- ฟังก์ชันตรวจสอบความยาว + ชนิดข้อมูล ---
const validateLength = (field: string, value: unknown, max: number) => {
  if (typeof value !== "string") {
    throw new Error(`${field} must be a string.`);
  }
  if (value.length > max) {
    throw new Error(
      `${field} is too long. Maximum ${max} characters allowed, but got ${value.length}.`
    );
  }
};

// --- Basic Rate Limiting (per IP - memory only) ---
const rateLimit = new Map<string, { count: number; last: number }>();
const RATE_LIMIT_MAX = 5; // 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 นาที

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry) {
    rateLimit.set(ip, { count: 1, last: now });
    return true;
  }

  if (now - entry.last > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, last: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count++;
  return true;
}

// --- Main Handler ---
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await req.json();
    let { name, email, subject, message, address, phone } = data;

    // validate length
    validateLength("Name", name, limits.name);
    validateLength("Email", email, limits.email);
    validateLength("Subject", subject || "New Contact Form Message", limits.subject);
    validateLength("Phone", phone, limits.phone);
    validateLength("Address", address, limits.address);
    validateLength("Message", message, limits.message);

    // validate + normalize email
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }
    email = validator.normalizeEmail(email) || email;

    // sanitize inputs
    name = sanitize(name);
    email = sanitize(email);
    subject = sanitize(subject || "New Contact Form Message");
    phone = sanitize(phone);
    address = sanitize(address);
    message = escapeHTML(message);

    // --- Check Env ---
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.REPLY_MAIL
    ) {
      console.error("SMTP configuration missing in .env");
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- ส่งเมล ---
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.REPLY_MAIL}>`,
      replyTo: sanitize(email),
      to: process.env.EMAIL_USER,
      subject: sanitize(subject),
      text: `
New Contact Form Submission

Name: ${sanitize(name)}
Phone: ${sanitize(phone)}
Address: ${sanitize(address)}

Message:
${sanitize(message)}
`,
      html: `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <h2 style="color: #0066cc; border-bottom: 2px solid #eee; padding: 20px 0;">
    New Contact Form Submission
  </h2>

  <p><strong style="color:#555; font-size:18px; padding-left: 50px; padding-bottom:30px ;">Name:</strong> ${escapeHTML(name)}</p>

  <p><strong style="color:#555; font-size:18px; padding-left: 50px; padding-bottom:30px ;">Phone:</strong> ${escapeHTML(phone)}</p>
 
  <p><strong style="color:#555; font-size:18px; padding-left: 50px; padding-bottom:30px ;">Address:</strong> ${escapeHTML(address)}</p>
 
  
  <div style="background:#f9f9f9; padding:12px; border-radius:8px; border:1px solid #ddd;">
   <p style="margin-top:16px;"><strong>Message:</strong></p>  ${escapeHTML(message).replace(/\n/g, "<br/>")}
  </div>

  <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />
  <p style="font-size:12px; color:#999;">This message was sent from your website contact form.</p>
</div>
`,
    });


    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Contact form error:", error);
    // ไม่ส่ง error message จริงกลับ client
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
