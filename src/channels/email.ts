import nodemailer from "nodemailer";

export class EmailChannel {
  private transport = nodemailer.createTransport({ host: process.env.SMTP_HOST || "localhost", port: 587 });
  async send(msg: { to: string; subject: string; body: string }) {
    await this.transport.sendMail({ from: "noreply@flowforge.io", to: msg.to, subject: msg.subject, html: msg.body });
  }
}
