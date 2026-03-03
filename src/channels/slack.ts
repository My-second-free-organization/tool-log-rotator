import { WebClient } from "@slack/web-api";

export class SlackChannel {
  private client = new WebClient(process.env.SLACK_TOKEN);
  async send(msg: { to: string; subject: string; body: string }) {
    await this.client.chat.postMessage({ channel: msg.to, text: `*${msg.subject}*\n${msg.body}` });
  }
}
