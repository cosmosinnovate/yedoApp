import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MailModule } from 'src/mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { UserSchema } from 'src/users/entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsSchema } from 'src/groups/entities/group.entity';
import { GroupService } from 'src/groups/groups.service';
import { UserService } from 'src/users/users.service';
import { TaskService } from 'src/tasks/tasks.service';
import { TaskSchema } from 'src/tasks/entities/task.entity';

@Module({
  imports: [
    MailModule,
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      },
      {
        name: 'Group',
        schema: GroupsSchema,
      },
      {
        name: 'Task',
        schema: TaskSchema,
      },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '90d' },
      global: true,
    }),
  ], // 👈
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    GroupService,
    TaskService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
