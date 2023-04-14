import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendEmail(
    createAuthDto: Record<string, any>,
    data: Record<string, any>,
  ) {
    await this.mailerService.sendMail({
      to: createAuthDto.email,
      subject: data.subject,
      template: './confirmation',
      context: {
        ...data,
      },
    });
  }
}
