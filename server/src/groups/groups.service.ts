import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Group } from './entities/group.entity';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GroupsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: Group, userId: number) {
    return await this.prisma.group.upsert({
      where: { name: 'CosmosJulienGang' },
      update: {
        userId: userId,
      },
      create: {
        name: dto.name,
        description: dto.description,
        userId: userId,
      },
    });
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
