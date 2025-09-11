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

// --- Basic Rate Limiting (per IP) ---
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

    // validate email (ใช้ validator.js)
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

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
      !process.env.EMAIL_PASS
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
      from: `"Website Contact" ${process.env.Reply_Mail}`,
      replyTo: sanitize(email),
      to: process.env.EMAIL_USER,
      subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
        <hr/>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Contact form error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Unknown error occurred" },
      { status: 500 }
    );
  }
}
