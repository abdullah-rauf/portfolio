import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email to you (receive messages)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: "abdullahrauf009@gmail.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              💡 <strong>Tip:</strong> Reply directly to <a href="mailto:${email}" style="color: #1e40af;">${email}</a> to respond to this inquiry.
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p>This message was sent from your portfolio contact form</p>
            <p>Received on ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Abdullah Rauf",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">Thank You for Reaching Out!</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="color: #374151; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
            <p style="color: #4b5563; line-height: 1.6;">
              Thank you for contacting me! I've received your message and will get back to you as soon as possible, usually within 24-48 hours.
            </p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #374151; margin: 5px 0;"><strong>Your Message:</strong></p>
            <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap; margin: 10px 0;">${message}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <p style="color: #374151; margin: 10px 0;"><strong>Connect with me:</strong></p>
            <p style="margin: 5px 0;">
              <a href="https://github.com/abdullah-rauf" style="color: #3b82f6; text-decoration: none; margin-right: 15px;">GitHub</a>
              <a href="https://linkedin.com/in/abdullahrauf" style="color: #3b82f6; text-decoration: none; margin-right: 15px;">LinkedIn</a>
              <a href="mailto:abdullahrauf009@gmail.com" style="color: #3b82f6; text-decoration: none;">Email</a>
            </p>
          </div>
          
          <div style="margin-top: 20px; text-align: center; color: #9ca3af; font-size: 12px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p><strong>Abdullah Rauf</strong></p>
            <p>Full Stack Developer & AI Integration Specialist</p>
            <p>📞 03000979300 | ✉️ abdullahrauf009@gmail.com</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToSender);

    return NextResponse.json(
      { 
        message: "Email sent successfully! Thank you for reaching out.",
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { 
        error: "Failed to send email. Please try again or contact directly at abdullahrauf009@gmail.com",
        success: false 
      },
      { status: 500 }
    );
  }
}

