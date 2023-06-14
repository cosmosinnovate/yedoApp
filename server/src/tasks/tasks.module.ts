import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksSchema } from './entities/task.entity';
import { UserSchema } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Task', schema: TasksSchema },
      { name: 'User', schema: UserSchema },
    ]),
  ],
  controllers: [TasksController],
  providers: [TasksService, UserService],
})
export class TasksModule {}
