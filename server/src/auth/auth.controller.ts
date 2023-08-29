import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  UseFilters,
  BadRequestException,
  Logger,
  Request,
  Patch,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { SuccessResponse, SuccessfulResponse } from 'src/util/util.response';
import { Public } from '../decorator/decorators.public';
import { BadRequestExceptionFilter } from 'src/util/util.exception';
import { GenerateOtp } from 'src/util/util.otp';
import { DecodedUser, Otp } from './entities/auth.entity';
import { GroupService } from 'src/groups/groups.service';
import { CreateGroupDto } from 'src/groups/dto/create-group.dto';
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
    const otp: number = GenerateOtp();
    // Create User
    if (request.name) {
      userRecord.isAdmin = true;
      //   await this.groupService.create(group, user.id);
    }
    userRecord.firstName = request.firstName;
    userRecord.lastName = request.lastName;
    userRecord.email = request.email;
    userRecord.otp = otp;
    userRecord.password = request.password;
    const user = await this.authService.create(userRecord);
    // Generate JWT
    const jwt = this.authService.generateJWT({ id: user.id, ...user.toJSON() });
    this.authService.handleOTP(user.email, otp);
    return SuccessResponse({
      statusCode: 201,
      message: 'User created successfully',
      data: jwt,
    });
  }

  // @Public()
  // @Get('/generate-password')
  // @ApiCreatedResponse({ type: SuccessfulResponse })
  // async generateOneTimePassword() {
  //   return SuccessResponse({
  //     statusCode: 200,
  //     message: 'OTP sent to your email',
  //     data: await this.authService.generateSecurePassword('password'),
  //   });
  // }

  @Public()
  @Post('/login')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  async login(@Body() request: CreateAuthDto) {
    console.log(request);
    try {
      const otp: number = GenerateOtp();
      const user = await this.authService.login(request, otp);
      const jwt = this.authService.generateJWT({
        id: user._id,
        ...user.toJSON(),
      });
      this.authService.handleOTP(request.email, otp);
      return SuccessResponse({
        statusCode: 201,
        message: 'OTP sent to your email',
        data: jwt,
      });
    } catch (e: any) {
      throw new BadRequestException(e.message);
    }
  }

  @ApiBearerAuth()
  @Patch('/otp/verify')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  @UsePipes(new ValidationPipe())
  async confirmCode(
    @Request() headers: Record<string, any>,
    @Body() request: Otp,
  ) {
    const user: DecodedUser = headers['user'];
    try {
      const userRecord = await this.authService.verifyOtp(
        user?.id,
        +request.otp,
      );
      const jwt = this.authService.generateJWT({
        id: userRecord._id,
        ...userRecord.toJSON(),
      });
      return SuccessResponse({
        statusCode: 200,
        message: 'Successfully verified',
        data: jwt,
      });
    } catch (e: any) {
      throw new BadRequestException(e.message);
    }
  }
}
