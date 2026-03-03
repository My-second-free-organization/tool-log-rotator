import { EmailChannel } from "./channels/email";
import { SlackChannel } from "./channels/slack";

interface Notification { channel: "email" | "slack" | "sms" | "push"; to: string; subject: string; body: string; }

export class NotificationService {
  private email = new EmailChannel();
  private slack = new SlackChannel();

  async send(notification: Notification): Promise<void> {
    switch (notification.channel) {
      case "email": await this.email.send(notification); break;
      case "slack": await this.slack.send(notification); break;
      default: console.log(`Channel ${notification.channel} not implemented`);
    }
  }
}
