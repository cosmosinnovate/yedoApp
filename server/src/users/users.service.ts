import { Injectable, Logger } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userSchema: Model<UserEntity>,
  ) {}

  async findAll() {
    const users = await this.userSchema.find({});
    Logger.log(users);
    return users;
  }

  async create(user: UserEntity) {
    return await this.userSchema.create(user);
  }

  async findByEmail(email: string) {
    return await this.userSchema.findOne({ email });
  }

  async updateOtp(id: string, otp: number, updatedAt: Date, verified: boolean) {
    const update: UpdateUserDto = {
      otp: otp,
      updatedAt: updatedAt,
      verified: verified,
    };
    return await this.update(id, update);
  }

  async exists(email: string) {
    const user = await this.userSchema.findOne({ email });
    return user ? true : false;
  }

  async findOne(_id: string) {
    return this.userSchema.findOne({ _id });
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    const updateData = {};
    for (const property in updateUserDto) {
      if (updateUserDto[property]) {
        updateData[property] = updateUserDto[property];
      }
    }

    return this.userSchema.findOneAndUpdate(
      { _id },
      { ...updateData },
      { new: true },
    );
  }

  remove(id: string) {
    return this.userSchema.findByIdAndRemove(id);
  }
}
