import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from './entities/user.entity';
import { TaskService } from 'src/tasks/tasks.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userSchema: Model<UserEntity>,
    private readonly taskService: TaskService,
  ) {}

  async findAll() {
    return await this.userSchema.find({});
  }

  async create(user: UserEntity) {
    return await this.userSchema.create(user);
  }

  async findByEmail(email: string) {
    return await this.userSchema.findOne({ email });
  }

  async updateOtp(id: string, updatedAt: Date, verified: boolean) {
    const update = {
      updatedAt,
      verified,
    };

    Logger.log('Updating user: ', update, 'with id: ', id);
    const updated = await this.update(id, update);
    Logger.log('Updated user: ', updated);
    return updated;
  }

  async exists(email: string) {
    const user = await this.userSchema.findOne({ email });
    return user ? true : false;
  }

  async findOne(_id: string) {
    return await this.userSchema.findOne({ _id });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    // const payload = {};
    // for (const property in updateUserDto) {
    //   if (updateUserDto[property]) {
    //     payload[property] = updateUserDto[property];
    //   }
    // }
    return await this.userSchema.findOneAndUpdate(
      { _id },
      { ...updateUserDto },
      { new: true },
    );
  }

  async remove(id: string) {
    const user = await this.userSchema.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // Remove all tasks belonging to the user
    await this.taskService.deleteMany(id);
    return await this.userSchema.findByIdAndRemove(id);
  }

  // async remove(id: string) {
  //   const user = await this.userSchema.findById(id);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   // Remove all tasks belonging to the user
  //   await this.taskSchema.deleteMany({ ownerId: id });

  //   // Remove the user from all groups
  //   const groups = await this.groupSchema.find({ members: id });
  //   for (const group of groups) {
  //     group.members = group.members.filter(memberId => memberId !== id);
  //     await group.save();
  //   }

  //   // Remove the user
  //   return this.userSchema.findByIdAndRemove(id);
  // }
}
