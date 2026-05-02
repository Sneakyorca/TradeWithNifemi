import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env.local") });

const app = express();
const PORT = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body ?? {};

    if (!name || !email || !phone || !interest || !message) {
      return res
        .status(400)
        .json({ ok: false, message: "All fields are required." });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || smtpUser;

    if (!smtpUser || !smtpPassword || !adminEmail) {
      return res
        .status(500)
        .json({ ok: false, message: "Mail server is not configured." });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const serviceLabel =
      interest === "signals"
        ? "Forex Signals"
        : interest === "management"
          ? "Account Management"
          : "Both";

    const mail = {
      from: `Trade With Nifemi <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New contact request: ${serviceLabel}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interest: ${serviceLabel}`,
        "",
        message,
      ].join("\n"),
    };

    await transporter.sendMail(mail);

    return res.json({ ok: true, message: "Message sent successfully." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ ok: false, message: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Mail server listening on http://localhost:${PORT}`);
});
