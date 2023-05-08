import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { MailData } from 'src/mail/mail.data';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private jwtService: JwtService,
  ) {}

  async create(userDto: User): Promise<User | undefined> {
    return await this.prisma.user.create({ data: userDto });
  }

  async login(reqDto: CreateAuthDto, otp: number): Promise<User | undefined> {
    Logger.log(reqDto);
    const email = reqDto.email;
    let user = await this.prisma.user.findFirst({ where: { email } });
    if (user === null) {
      throw new BadRequestException('No such user');
    }
    user = await this.updateOtp(user, otp);
    return user;
  }

  async updateOtp(user: User, otp: number, verified = false) {
    return await this.prisma.user.update({
      where: { id: user.id },
      data: { otp, updatedAt: new Date(), verified: verified },
    });
  }

  async verifyOtp(id: number, otp: number) {
    let user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.otp !== otp) {
      throw new BadRequestException('Invalid OTP');
    }
    user = await this.updateOtp(user, 0, true);
    return user;
  }

  handleOTP(email: string, otp: number) {
    const data: Record<string, any> = {
      title: 'Welcome to the app',
      subject: 'Welcome to the app',
      topBody: MailData.OTP_TOP_BODY,
      bottomBody: MailData.OTP_BOTTOM_BODY,
      otp: otp,
    };
    try {
      this.mailService.sendEmail(email, data);
    } catch (e: any) {
      Logger.log('Email Issues: ', e.message);
    }
  }

  generateJWT(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      verified: user.verified,
    };

    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
    };
  }

  // Future implementation
  // async handleOTP(user: User, data: Record<string, any>) {
  //   const otp: number = GenerateOtp();
  //   user.otp = otp;
  //   data.otp = otp;
  //   try {
  //     Logger.log('Sending email');
  //     await this.retrySendEmail(user, data, 3); // Retry up to 3 times
  //   } catch (e: any) {
  //     Logger.log('Email Issues: ', e);
  //     throw new Exception('Email Issues');
  //   }
  // }

  // async retrySendEmail(
  //   user: User,
  //   data: Record<string, any>,
  //   retries: number,
  // ) {
  //   for (let i = 0; i < retries; i++) {
  //     try {
  //       await this.mailService.sendEmail(user, data);
  //       return;
  //     } catch (e: any) {
  //       if (i === retries - 1) {
  //         // Give up and rethrow the error after the last retry
  //         throw e;
  //       }
  //       // Wait for 2 seconds before retrying
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     }
  //   }
  // }
}
