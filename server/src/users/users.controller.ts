import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { SuccessResponse } from 'src/util/util.response';
import { CurrentUser } from 'src/decorator/user.decorator';

@Controller('api/users')
@ApiTags('api/users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @ApiBearerAuth()
  @Get('/all')
  @ApiOkResponse({ type: UserEntity, isArray: true })
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (e: any) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @ApiBearerAuth()
  @Get('/:id')
  @ApiOkResponse({ type: UserEntity })
  async findOne(@CurrentUser() user: UserEntity, @Param('id') id: string) {
    return SuccessResponse({
      statusCode: 200,
      message: 'User',
      data: await this.usersService.findOne(id),
    });
  }

  @ApiBearerAuth()
  @Patch('/:id')
  @ApiOkResponse({ type: UserEntity })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return SuccessResponse({
        statusCode: 200,
        message: 'Update successfully',
        data: await this.usersService.update(id, updateUserDto),
      });
    } catch (e: any) {
      Logger.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  @ApiBearerAuth()
  @Delete('/:id')
  @ApiOkResponse({ type: UserEntity })
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
