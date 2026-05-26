import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendFormEmailOptions {
  to: string;
  subject: string;
  fields: Record<string, unknown>;
  formType: string;
  pageRoute: string;
  userAgent: string;
}

export async function sendFormEmail({
  to,
  subject,
  fields,
  formType,
  pageRoute,
  userAgent,
}: SendFormEmailOptions) {
  const timestamp = new Date().toISOString();

  // Build field rows for HTML and plain text
  const fieldEntries = Object.entries(fields).filter(
    ([key]) => key !== "company_website_confirm" // Exclude honeypot
  );

  const htmlRows = fieldEntries
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${key}</td><td style="padding:8px 12px">${String(value || "-")}</td></tr>`
    )
    .join("");

  const htmlBody = `
    <div style="font-family:system-ui,sans-serif;max-width:600px">
      <h2 style="color:#0E0F0A">New ${formType} submission</h2>
      <table style="width:100%;border-collapse:collapse;margin:24px 0">
        ${htmlRows}
      </table>
      <hr style="border:none;border-top:1px solid #DDE2EA;margin:24px 0" />
      <p style="color:#6F7583;font-size:12px">
        Submitted at ${timestamp}<br/>
        Page: ${pageRoute}<br/>
        User agent: ${userAgent}
      </p>
    </div>
  `;

  const textBody = fieldEntries
    .map(([key, value]) => `${key}: ${String(value || "-")}`)
    .join("\n")
    .concat(
      `\n\n---\nSubmitted at ${timestamp}\nPage: ${pageRoute}\nUser agent: ${userAgent}`
    );

  const fromEmail =
    process.env.FORMS_FROM_EMAIL || "forms@inspirelabs.in";

  return resend.emails.send({
    from: `Inspirelabs Forms <${fromEmail}>`,
    to,
    subject,
    html: htmlBody,
    text: textBody,
  });
}
