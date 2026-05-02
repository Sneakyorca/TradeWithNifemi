const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, interest, message } = req.body;

  if (!name || !email || !phone || !interest || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "We received your message - TradeWithNifemi",
      html: `
        <h2>Thanks for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
        <hr />
        <p><strong>Your Phone:</strong> ${phone}</p>
        <p><strong>Your Service Interest:</strong> ${interest}</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
        <hr />
        <p>Best regards,<br />TradeWithNifemi Team</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: adminEmail,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested in:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `,
    });

    return res.status(200).json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      ok: false,
      error: "Failed to submit form. Please try again later.",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
