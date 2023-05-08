import {
  Controller,
  Post,
  Body,
  ConflictException,
  UsePipes,
  ValidationPipe,
  UseFilters,
  BadRequestException,
  Logger,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { SuccessResponse, SuccessfulResponse } from 'src/util/util.response';
import { Public } from './decorators/decorators.public';
import { BadRequestExceptionFilter } from 'src/util/util.exception';
import { GenerateOtp } from 'src/util/util.otp';
import { DecodedUser, Otp } from './entities/auth.entity';
import { GroupsService } from 'src/groups/groups.service';
import { CreateGroupDto } from 'src/groups/dto/create-group.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateUserAuth } from './dto/create-user-auth.dto';

@Controller('api/auth')
@ApiTags('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly groupService: GroupsService,
  ) {}

  @Public()
  @Post('/register')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  @UsePipes(new ValidationPipe())
  @UseFilters(new BadRequestExceptionFilter())
  async create(@Body() request: CreateUserAuth) {
    console.log(request);
    try {
      const otp: number = GenerateOtp();
      // Create User
      const userReq: User = new User();
      userReq.email = request.email;
      userReq.firstName = request.firstName;
      userReq.lastName = request.lastName;
      userReq.otp = otp;
      userReq.verified = false;
      const user = await this.authService.create(userReq);

      // Create group if group name is present
      if (request.name) {
        const group = new CreateGroupDto();
        group.name = request.name;
        await this.groupService.create(group, user.id);
      }

      // Generate JWT
      const jwt = this.authService.generateJWT(user);
      // Send OTP
      this.authService.handleOTP(user.email, otp);

      return SuccessResponse({
        statusCode: 201,
        message: 'User created successfully',
        data: jwt,
      });
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new ConflictException(e.message);
      } else {
        Logger.log(e);
        throw new BadRequestException(e.message);
      }
    }
  }

  @Public()
  @Post('/login')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  async login(@Body() request: CreateAuthDto) {
    try {
      const otp: number = GenerateOtp();
      const user = await this.authService.login(request, otp);
      const jwt = this.authService.generateJWT(user);

      this.authService.handleOTP(request.email, otp);
      return SuccessResponse({
        statusCode: 201,
        message: 'OTP sent to your email',
        data: jwt,
      });
    } catch (e: any) {
      Logger.log(e);
      throw new BadRequestException(e.message);
    }
  }

  @ApiBearerAuth()
  @Post('/otp/verify')
  @ApiCreatedResponse({ type: SuccessfulResponse })
  @UsePipes(new ValidationPipe())
  async verifyAccount(
    @Request() headers: Record<string, any>,
    @Body() request: Otp,
  ) {
    console.log(request);
    const user: DecodedUser = headers['user'];
    console.log(user.id);

    try {
      const userRecord = await this.authService.verifyOtp(
        +user?.id,
        +request.otp,
      );
      const jwt = this.authService.generateJWT(userRecord);
      return SuccessResponse({
        statusCode: 200,
        message: 'Successfully verified',
        data: jwt,
      });
    } catch (e: any) {
      Logger.log(e);
      throw new BadRequestException(e.message);
    }
  }
}
