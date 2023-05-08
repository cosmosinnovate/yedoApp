import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { EmailBounceError } from './mail.error';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendEmail(email: string, data: Record<string, any>) {
    Logger.log(data);
    this.mailerService
      .sendMail({
        to: email,
        subject: data.subject,
        template: './confirmation',
        context: {
          ...data,
        },
      })
      .then((res) => {
        Logger.log(`Email sent: ${res.messageId}`);
      })
      .catch((err) => {
        throw new EmailBounceError(err.message);
      });
  }
}
