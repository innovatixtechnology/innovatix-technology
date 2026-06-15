import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipientEmail = "innovatixtechnology12@gmail.com";

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = cleanText(body.fullName);
    const email = cleanText(body.email);
    const company = cleanText(body.company);
    const service = cleanText(body.service);
    const message = cleanText(body.message);
    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeService = escapeHtml(service || "Not provided");
    const safeMessage = escapeHtml(message);

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and project message." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "Email sending is not configured yet." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Innovatix Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New consultation request from ${fullName}`,
      text: [
        "New consultation request from the Innovatix website.",
        "",
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Interested Service: ${service || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New consultation request</h2>
          <p><strong>Name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Interested Service:</strong> ${safeService}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your request." },
      { status: 500 },
    );
  }
}
