import { Injectable, Logger } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userSchema: Model<UserEntity>,
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

  async updateOtp(id: string, otp: number, updatedAt: Date, verified: boolean) {
    const update = {
      otp,
      updatedAt,
      verified,
    };
    return await this.update(id, update);
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

  remove(id: string) {
    return this.userSchema.findByIdAndRemove(id);
  }
}
