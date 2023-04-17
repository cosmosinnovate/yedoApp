import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { MailData } from 'src/mail/mail.data';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private jwtService: JwtService,
  ) {}

  async create(userDto: CreateUserDto): Promise<CreateUserDto | undefined> {
    return await this.prisma.user.create({ data: userDto });
  }

  async login(userDto: CreateUserDto): Promise<CreateUserDto | undefined> {
    Logger.log(userDto);
    const email = userDto.email;
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (user === null) {
      throw new BadRequestException('No such user');
    }
    return user;
  }

  async verifyOtp(id: number, otp: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.otp !== otp) {
      throw new BadRequestException('Invalid OTP');
    }
    return this.generateJWT(user);
  }

  handleOTP(userDto: CreateUserDto, otp: number) {
    const data: Record<string, any> = {
      title: 'Welcome to the app',
      subject: 'Welcome to the app',
      topBody: MailData.OTP_TOP_BODY,
      bottomBody: MailData.OTP_BOTTOM_BODY,
      otp: otp,
    };
    try {
      this.mailService.sendEmail(userDto, data);
    } catch (e: any) {
      Logger.log('Email Issues: ', e.message);
    }
  }

  generateJWT(user: CreateUserDto) {
    const payload = { email: user.email, sub: user.id };
    Logger.log('Payload: ', payload);
    const accessToken = this.jwtService.sign(payload);
    Logger.log(payload, accessToken);
    return {
      access_token: accessToken,
    };
  }

  // Future implementation
  // async handleOTP(user: CreateUserDto, data: Record<string, any>) {
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
  //   user: CreateUserDto,
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
