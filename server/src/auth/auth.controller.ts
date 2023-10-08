import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseFilters,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { SuccessResponse, SuccessfulResponse } from 'src/util/util.response';
import { Public } from '../decorator/decorators.public';
import { BadRequestExceptionFilter } from 'src/util/util.exception';
import { GroupService } from 'src/groups/groups.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateUserAuth } from './dto/create-user-auth.dto';
import { UserService } from 'src/users/users.service';

@Controller('api/auth')
@ApiTags('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly groupService: GroupService,
  ) {}

  @Public()
  @Post('/register')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  @UsePipes(new ValidationPipe())
  @UseFilters(new BadRequestExceptionFilter())
  async create(@Body() request: CreateUserAuth) {
    const userRecord: UserEntity = new UserEntity();
    if (request.name) {
      userRecord.isAdmin = true;
      //   await this.groupService.create(group, user.id);
    }

    userRecord.firstName = request.firstName;
    userRecord.lastName = request.lastName;
    userRecord.email = request.email;
    userRecord.password = request.password;
    const user = await this.authService.create(userRecord);
    // Generate JWT
    const jwt = this.authService.generateJWT({ id: user.id, ...user.toJSON() });

    this.authService.handleOTP(user.email);
    return SuccessResponse({
      statusCode: 201,
      message: 'User created successfully',
      data: jwt,
    });
  }

  @Public()
  @Post('/login')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  async login(@Body() request: CreateAuthDto) {
    console.log(request);
    try {
      const user = await this.authService.login(request);
      const jwt = this.authService.generateJWT({
        id: user._id,
        ...user.toJSON(),
      });
      this.authService.handleOTP(request.email);
      return SuccessResponse({
        statusCode: 201,
        message: 'Successfully login',
        data: jwt,
      });
    } catch (e: any) {
      throw new BadRequestException(e.message);
    }
  }

  // @Public()
  // @Get('/generate-password')
  // @ApiCreatedResponse({ type: SuccessfulResponse })
  // async generateOneTimePassword() {
  //   return SuccessResponse({
  //     statusCode: 200,
  //     message: 'Generated password',
  //     data: await this.authService.generateSecurePassword('password'),
  //   });
  // }
}
