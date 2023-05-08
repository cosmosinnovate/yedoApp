import { Injectable, Logger } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    const users = this.prisma.user.findMany();
    Logger.log(users);
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const updateData = {};
    for (const property in updateUserDto) {
      if (updateUserDto[property]) {
        updateData[property] = updateUserDto[property];
      }
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
