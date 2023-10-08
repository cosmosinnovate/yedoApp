import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './entities/user.entity';
import { TaskService } from 'src/tasks/tasks.service';
import { TaskSchema } from 'src/tasks/entities/task.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Task', schema: TaskSchema },
    ]),
  ], // 👈 import MailModule
  controllers: [UsersController],
  providers: [UserService, TaskService],
})
export class UsersModule {}
