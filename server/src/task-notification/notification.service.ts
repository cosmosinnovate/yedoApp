import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/tasks/entities/task.entity';
import { Model } from 'mongoose';
import { TaskService } from 'src/tasks/tasks.service';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);
  constructor(private taskService: TaskService) {}

  @Cron('5 * * * * *')
  handleCron() {
    this.logger.debug('Called when the second is 45');
  }

  @Interval(5000)
  async sendNotificationOnTaskExpiry() {
    this.logger.debug('Send notifications every 5 seconds');
    const tasks = await this.taskService.findTasksNearExpiry();
    tasks.forEach((task) => {
      console.log('Task', task);
    });
  }
}
