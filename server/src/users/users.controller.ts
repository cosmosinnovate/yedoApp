import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { Util } from 'src/util/util.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @ApiCreatedResponse({ type: User })
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (e: any) {
      console.log(e);
      return Util.response(false, e.message, null);
    }
  }

  @Post('/login')
  @ApiCreatedResponse({ type: User })
  login(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (e: any) {
      console.log(e);
      return Util.response(false, e.message, null);
    }
  }

  @Get('/confirm/:id/:otp')
  @ApiCreatedResponse({ type: User })
  verifyAccount(@Param('id') id: string, @Param('otp') otp: string) {
    try {
      return this.usersService.verifyOtp(+id, +otp);
    } catch (e: any) {
      console.log(e);
      return Util.response(false, e.message, null);
    }
  }

  @Get()
  @ApiOkResponse({ type: User, isArray: true })
  findAll() {
    try {
      return this.usersService.findAll();
    } catch (e: any) {
      console.log(e);
      return Util.response(false, e.message, null);
    }
  }

  @Get(':id')
  @ApiOkResponse({ type: User })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: User })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: User })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
