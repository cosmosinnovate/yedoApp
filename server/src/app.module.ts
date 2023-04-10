import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [UsersModule, PrismaModule, TasksModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
