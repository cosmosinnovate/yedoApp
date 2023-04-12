import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Util } from 'src/util/util.service';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  create(createUserDto: CreateUserDto) {
    const otp: number = Util.generateOtp();
    createUserDto.otp = otp;
    // Send OTP to user's email
    this.mailService.sendUserConfirmation(createUserDto, otp.toString());
    // On successful email send, create the user
    Logger.log('Create User: ', createUserDto);
    return this.prisma.user.create({ data: createUserDto });
  }

  async verifyOtp(id: number, otp: number) {
    // If the otp is correct, then update the user's verified status to true and reset the otp to 0
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (user.otp === otp) {
      return this.prisma.user.update({
        where: { id },
        data: { otp: 0, verified: true },
      });
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
