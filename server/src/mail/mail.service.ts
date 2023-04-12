import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendUserConfirmation(createUserDto: CreateUserDto, otp: string) {
    await this.mailerService.sendMail({
      to: createUserDto.email,
      subject: 'Confirm your email',
      template: './confirmation',
      context: {
        name: createUserDto.email,
        otp,
      },
    });
  }
}
