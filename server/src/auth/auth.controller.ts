import {
  Controller,
  Post,
  Body,
  ConflictException,
  HttpCode,
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
import { ResponseEntity, SuccessResponse } from 'src/util/util.response';
import { Public } from './decorators/decorators.public';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { BadRequestExceptionFilter } from 'src/util/util.exception';
import { GenerateOtp } from 'src/util/util.otp';
import { Otp } from './entities/auth.entity';
import { GroupsService } from 'src/groups/groups.service';
import { CreateGroupDto } from 'src/groups/dto/create-group.dto';

@Controller('api/auth')
@ApiTags('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly groupService: GroupsService,
  ) {}

  @Public()
  @Post('/register')
  @ApiCreatedResponse({ type: User })
  @UsePipes(new ValidationPipe())
  @UseFilters(new BadRequestExceptionFilter())
  async create(@Body() request: CreateUserDto) {
    console.log(request);
    try {
      const otp: number = GenerateOtp();
      request.otp = otp;
      // Create User
      const userReq: User = new User();
      userReq.email = request.email;
      userReq.firstName = request.firstName;
      userReq.lastName = request.lastName;
      userReq.otp = otp;
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
      this.authService.handleOTP(user, otp);

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
  @ApiCreatedResponse({ type: User })
  async login(@Body() request: CreateUserDto) {
    try {
      const otp: number = GenerateOtp();
      const user = await this.authService.login(request);
      await this.authService.updateOtp(user, otp);
      const jwt = this.authService.generateJWT(user);

      this.authService.handleOTP(request, otp);
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
  @ApiCreatedResponse({ type: ResponseEntity })
  async verifyAccount(
    @Request() headers: Record<string, string>,
    @Body() request: Otp,
  ) {
    const user = headers['user'];
    console.log(user);
    try {
      const userRecord = await this.authService.verifyOtp(
        +user?.sub,
        request.otp,
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
