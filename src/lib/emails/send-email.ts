import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
}) {
  // console.log("[sendEmail] Sending email", { to, subject });

  return resend.emails
    .send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [to],
      subject,
      html,
      text,
    })
    .then((result) => {
      if (result.error) {
        console.error("[sendEmail] Failed to send email", {
          to,
          subject,
          error: result.error,
        });
      } else {
        console.log("[sendEmail] Email sent successfully", {
          to,
          subject,
          id: result.data?.id,
        });
      }
      return result;
    });
}

// import { ServerClient } from "postmark";

// const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!);

// export function sendEmail({
//   to,
//   subject,
//   html,
//   text,
// }: {
//   to: string;
//   subject: string;
//   html: string;
//   text: string;
// }) {
//   return postmarkClient.sendEmail({
//     From: process.env.POSTMARK_FROM_EMAIL!,
//     To: to,
//     Subject: subject,
//     HtmlBody: html,
//     TextBody: text,
//   });
// }
