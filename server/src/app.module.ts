import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TaskModule } from './tasks/tasks.module';
import { GroupsModule } from './groups/groups.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import {
  BadRequestExceptionFilter,
  EmailBounceExceptionFilter,
} from './util/util.exception';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { NotificationModule } from './task-notification/notification.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    NotificationModule,
    UsersModule,
    AuthModule,
    TaskModule,
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
