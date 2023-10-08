import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { TasksSchema } from 'src/tasks/entities/task.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Task', schema: TasksSchema },
    ]),
  ], // 👈 import MailModule
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
