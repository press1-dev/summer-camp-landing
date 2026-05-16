import { readMessages, writeMessages } from "./emailStore";

type ContactPayload = {
  fname: string;
  email: string;
  phone?: string;
  age?: string;
  interest?: string;
  message?: string;
  receivedAt?: string;
};

const DEFAULT_RECIPIENTS = [
  "sushanthona04@gmail.com",
  "ashishacharya0@gmail.com",
];

export async function sendContactEmail(
  payload: ContactPayload,
  extraRecipients?: string[],
) {
  const recipients = Array.from(
    new Set([...(extraRecipients || []), ...DEFAULT_RECIPIENTS]),
  );

  // 1. Try Resend (Preferred)
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = require("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const subject = `New inquiry from ${payload.fname} — ${payload.interest || "inquiry"}`;

      const { data, error } = await resend.emails.send({
        from: process.env.FROM_EMAIL || "Alloria <onboarding@resend.dev>",
        to: recipients,
        subject,
        html: makeHtml(payload),
        text: makeText(payload),
      });

      if (error) throw error;
      return { ok: true, via: "resend", id: data?.id };
    } catch (e) {
      console.error("Resend send failed", e);
      // fallthrough
    }
  }

  // 2. Try SendGrid
  if (process.env.SENDGRID_API_KEY) {
    try {
      // dynamic import to keep builds safe when package missing
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const sg = require("@sendgrid/mail");
      sg.setApiKey(process.env.SENDGRID_API_KEY);
      const subject = `New inquiry from ${payload.fname} — ${payload.interest || "inquiry"}`;
      const body = makeHtml(payload);
      const msg = {
        to: recipients,
        from: process.env.FROM_EMAIL || "no-reply@alloria.com",
        subject,
        html: body,
        text: makeText(payload),
      };
      await sg.send(msg);
      return { ok: true, via: "sendgrid" };
    } catch (e) {
      // fallthrough to other methods
      console.error("SendGrid send failed", e);
    }
  }

  // 3. Try SMTP via nodemailer
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: !!process.env.SMTP_SECURE, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from:
          process.env.FROM_EMAIL ||
          process.env.SMTP_USER ||
          "no-reply@alloria.com",
        to: recipients.join(","),
        subject: `New inquiry from ${payload.fname} — ${payload.interest || "inquiry"}`,
        text: makeText(payload),
        html: makeHtml(payload),
      });
      return { ok: true, via: "smtp", info };
    } catch (e) {
      console.error("SMTP send failed", e);
    }
  }

  // No email provider configured: persist to local storage for later pickup
  try {
    const now = new Date().toISOString();
    payload.receivedAt = now;
    const stored = await readMessages("submissions");
    stored.unshift({ ...payload, recipients, via: "file" });
    await writeMessages("submissions", stored);
    return { ok: true, via: "file" };
  } catch (e) {
    console.error("Fallback storage failed", e);
    return { ok: false, error: String(e) };
  }
}

function makeText(p: ContactPayload) {
  return [
    `Name: ${p.fname}`,
    `Email: ${p.email}`,
    `Phone: ${p.phone || ""}`,
    `Age: ${p.age || ""}`,
    `Interest: ${p.interest || ""}`,
    "",
    "Message:",
    p.message || "",
  ].join("\n");
}

function makeHtml(p: ContactPayload) {
  const brandNavy = "#2b1b7a";
  const brandCoral = "#f25a5a";
  const brandAmber = "#f2a93b";
  const brandBg = "#fffaf1";
  const inkSoft = "#5a5475";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: ${brandBg}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 32px; overflow: hidden; border: 1px solid #ece6d6; box-shadow: 0 10px 30px rgba(43, 27, 122, 0.05);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: left;">
              <div style="display: inline-block; padding: 6px 12px; background-color: rgba(242, 90, 90, 0.1); border-radius: 100px; margin-bottom: 16px;">
                <span style="font-size: 11px; font-weight: 900; color: ${brandCoral}; text-transform: uppercase; letter-spacing: 0.15em;">New Message Received</span>
              </div>
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; color: ${brandNavy}; line-height: 1.1;">
                Inquiry from <span style="color: ${brandCoral};">${escapeHtml(p.fname)}</span>
              </h1>
              <p style="margin: 12px 0 0; font-size: 16px; color: ${inkSoft};">You have a new submission from the Alloria contact form.</p>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background-color: #ece6d6; margin: 10px 0 30px;"></div>
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td width="50%" style="padding-bottom: 24px; vertical-align: top;">
                    <p style="margin: 0; font-size: 11px; font-weight: 900; color: rgba(31, 24, 64, 0.4); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px;">Email Address</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1f1840;">${escapeHtml(p.email)}</p>
                  </td>
                  <td width="50%" style="padding-bottom: 24px; vertical-align: top;">
                    <p style="margin: 0; font-size: 11px; font-weight: 900; color: rgba(31, 24, 64, 0.4); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px;">Phone Number</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1f1840;">${escapeHtml(p.phone || "Not provided")}</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-bottom: 24px; vertical-align: top;">
                    <p style="margin: 0; font-size: 11px; font-weight: 900; color: rgba(31, 24, 64, 0.4); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px;">Age / Level</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1f1840;">${escapeHtml(p.age || "Not specified")}</p>
                  </td>
                  <td width="50%" style="padding-bottom: 24px; vertical-align: top;">
                    <p style="margin: 0; font-size: 11px; font-weight: 900; color: rgba(31, 24, 64, 0.4); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 6px;">Program Interest</p>
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1f1840;">${escapeHtml(p.interest || "General Inquiry")}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Box -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="background-color: ${brandBg}; border: 2px solid #ece6d6; border-radius: 20px; padding: 24px;">
                <p style="margin: 0; font-size: 11px; font-weight: 900; color: rgba(31, 24, 64, 0.4); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 12px;">Student Details / Message</p>
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #1f1840; white-space: pre-wrap;">${p.message ? escapeHtml(p.message) : '<em style="color: #8a86a0;">No message provided</em>'}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: ${brandNavy}; text-align: center;">
              <p style="margin: 0; font-size: 13px; font-weight: 600; color: #ffffff; opacity: 0.8;">Small groups. Big confidence. Real growth.</p>
              <div style="height: 1px; background-color: rgba(255,255,255,0.1); margin: 20px 0;"></div>
              <p style="margin: 0; font-size: 11px; color: #ffffff; opacity: 0.4; text-transform: uppercase; letter-spacing: 0.1em;">
                Sent Via Alloria Learning &bull; ${new Date().toLocaleDateString()} &bull; Alloria Admin
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function escapeHtml(s: string) {
  return (s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

// nothing to re-export
