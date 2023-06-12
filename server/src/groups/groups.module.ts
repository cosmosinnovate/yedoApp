import { Module } from '@nestjs/common';
import { GroupService } from './groups.service';
import { GroupsController } from './groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsSchema } from './entities/group.entity';

@Module({  
  imports: [
    MongooseModule.forFeature([
      { name: 'Group', schema: GroupsSchema }
    ])
  ],
  controllers: [GroupsController],
  providers: [GroupService],
})
export class GroupsModule {}
