import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationService } from './notification.service';
import { TaskModule } from 'src/tasks/tasks.module';
import { TaskService } from 'src/tasks/tasks.service';
import { TaskSchema } from 'src/tasks/entities/task.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
    TaskModule,
  ],
  providers: [NotificationService, TaskService],
})
export class NotificationModule {}
