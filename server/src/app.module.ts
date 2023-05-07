import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import {
  BadRequestExceptionFilter,
  EmailBounceExceptionFilter,
} from './util/util.exception';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    AuthModule,
    UsersModule,
    PrismaModule,
    TasksModule,
    GroupsModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: BadRequestExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: EmailBounceExceptionFilter,
    },
  ],
})
export class AppModule {}
