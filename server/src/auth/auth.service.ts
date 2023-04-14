import { Injectable, Logger } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { GenerateOtp } from 'src/util/util.otp';
import { JwtService } from '@nestjs/jwt';
import { MailData } from 'src/mail/mail.data';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private jwtService: JwtService,
  ) {}

  create(createAccount: Record<string, any>) {
    const data = {
      title: 'Welcome to the app',
      subject: 'Welcome to the app',
      topBody: MailData.OTP_TOP_BODY,
      bottomBody: MailData.OTP_BOTTOM_BODY,
    };
    const user = this.prisma.user.create({
      data: createAccount as CreateUserDto,
    });
    // Generates OPT and sends it to user's email
    this.handleOTP(createAccount, data);
    // generate a new jwt
    const jwt = this.generateJWT(user);
    Logger.log(jwt);
    return jwt;
  }

  async login(createAuthDto: CreateAuthDto) {
    const data = {
      title: 'Welcome to the app',
      subject: 'Welcome to the app',
      topBody: MailData.OTP_TOP_BODY,
      bottomBody: MailData.OTP_BOTTOM_BODY,
    };
    const email = createAuthDto.email;
    const user = await this.prisma.user.findUnique({ where: { email } });
    // Generates OPT and sends it to user's email
    this.handleOTP(createAuthDto, data);
    // generate a new jwt
    return this.generateJWT(user);
  }

  async verifyOtp(id: number, otp: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (user.otp === otp) {
      this.prisma.user.update({
        where: { id },
        data: { otp: 0, verified: true },
      });

      return this.generateJWT(user);
    }
  }

  private async handleOTP(
    user: Record<string, any>,
    data: Record<string, any>,
  ): Promise<void> {
    const otp: number = GenerateOtp();
    user.otp = otp;
    data.otp = otp;
    // Send OTP to user's email
    this.mailService.sendEmail(user, data);
  }

  private async generateJWT(user: Record<string, any>) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = await this.jwtService.signAsync(payload);
    Logger.log(payload, accessToken);
    return {
      access_token: accessToken,
    };
  }
}
