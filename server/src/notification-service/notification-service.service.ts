import { Injectable } from '@nestjs/common';
import { TaskService } from 'src/tasks/tasks.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class NotificationServiceService {
  constructor(private readonly taskService: TaskService) {}

  async sendNotification() {
    return 'Notification sent';
  }

  @Cron(CronExpression.EVERY_HOUR)
  async sendNotificationOnTaskExpiry() {
    const tasks = await this.taskService.findTasksNearExpiry();
    tasks.forEach((task) => {
      console.log('Task', task);
    });
  }
}
