import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class GroupService {
  constructor(
    @InjectModel('Group') private readonly groupSchema: Model<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto, _id: string): Promise<Group> {
    const group = await this.groupSchema.create({
      name: createGroupDto.name,
      description: createGroupDto.description,
    });
    return group;
  }

  async findOne(_id: string) {
    return await this.groupSchema.findOne({ _id });
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    const { name, description } = updateGroupDto;
    const group = this.groupSchema.findByIdAndUpdate({
      where: { id },
      data: { name, description },
      // include: { members: true },
    });
    return group;
  }

  async remove(_id: string) {
    const group = await this.groupSchema.findOneAndDelete({ _id });
    if (!group) {
      throw new NotFoundException(`Group with ID ${_id} not found`);
    }
    return true;
  }
}
