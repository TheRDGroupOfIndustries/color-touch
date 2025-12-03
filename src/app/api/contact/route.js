import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { firstName, lastName, email, company, message } = await request.json();

    // 1. Create Transporter using SendGrid SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // This must be the string 'apikey'
        pass: process.env.SMTP_PASS, // Your SendGrid API Key
      },
    });

    // 2. Define Email Options
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Must be a verified sender in SendGrid
      to: process.env.EMAIL_TO,     // Where you want to receive the email
      replyTo: email,               // Allows you to reply directly to the user
      subject: `New Contact from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0070f3;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('SendGrid Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
