import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/decorator/user.decorator';
import { UserEntity } from 'src/users/entities/user.entity';

@Controller('api/groups')
@ApiTags('api/groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupService) {}

  @Post()
  create(
    @CurrentUser() user: UserEntity,
    @Body() createGroupDto: CreateGroupDto,
  ) {
    return this.groupsService.create(createGroupDto, user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(id);
  }
}
