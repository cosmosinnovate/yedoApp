import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { UserService } from 'src/users/users.service';
import { MailData } from 'src/mail/mail.data';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private mailService: MailService,
    private jwtService: JwtService,
  ) {}

  async create(userDto: UserEntity) {
    if (await this.usersService.exists(userDto.email)) {
      throw new BadRequestException('User already exists');
    }

    userDto.password = await this.generateSecurePassword(userDto.password);
    return await this.usersService.create(userDto);
  }

  async login(reqDto: CreateAuthDto, otp: number) {
    const email = reqDto.email;
    const password = reqDto.password;

    let user = await this.usersService.findByEmail(email);
    if (user === null) {
      throw new BadRequestException('No such user');
    }

    const isPasswordValid = await this.checkPassword(password, user.password);

    if (!isPasswordValid) throw new NotFoundException('Credential issue');

    // Check the password here
    user = await this.updateOtp(user._id.toString(), otp, user.verified);
    return user;
  }

  async verifyOtp(id: string, otp: number) {
    let user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.otp !== otp) {
      throw new BadRequestException('Invalid OTP');
    }
    user = await this.updateOtp(user._id.toString(), 0, true);
    return user;
  }

  handleOTP(email: string, otp: number) {
    const data: Record<string, any> = {
      title: 'Login',
      subject: 'Welcome back',
      topBody: MailData.LOGIN_BODY,
      otp: otp,
    };
    try {
      this.mailService.sendEmail(email, data);
    } catch (e: any) {
      Logger.log('Email Issues: ', e.message);
    }
  }

  async generateSecurePassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  private async checkPassword(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  generateJWT(user: {
    email: string;
    id: string;
    verified: boolean;
    firstName: string;
  }) {
    const payload = {
      email: user.email,
      id: user.id,
      verified: user.verified,
      firstName: user.firstName,
    };

    const jwToken = this.jwtService.sign(payload);
    return { jwToken };
  }

  private async updateOtp(id: string, otp = 0, verified = false) {
    return await this.usersService.updateOtp(id, otp, new Date(), verified);
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
