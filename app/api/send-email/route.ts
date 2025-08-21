import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const sanitize = (str: string) => str.replace(/[\r\n<>]/g, '').trim();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    let { name, email, subject, message, address, phone } = data;

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) throw new Error('Invalid email address');

    // sanitize inputs
    name = sanitize(name);
    email = sanitize(email);
    subject = sanitize(subject || 'New Contact Form Message');
    phone = sanitize(phone);
    address = sanitize(address);
    message = message.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Website Contact" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: subject,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g,'<br/>')}</p>
        <hr/>
      `
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return NextResponse.json({ success: false, message: error.message });
  }
}
