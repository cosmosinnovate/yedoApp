import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { EmailBounceError } from './mail.error';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendEmail(userDto: CreateUserDto, data: Record<string, any>) {
    Logger.log(data);
    this.mailerService
      .sendMail({
        to: userDto.email,
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
