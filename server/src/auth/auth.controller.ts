import {
  Controller,
  Post,
  Body,
  ConflictException,
  NotAcceptableException,
  HttpCode,
  UsePipes,
  ValidationPipe,
  UseFilters,
  BadRequestException,
  Headers,
  Logger,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { ResponseEntity, SuccessResponse } from 'src/util/util.response';
import { Public } from './decorators/decorators.public';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { BadRequestExceptionFilter } from 'src/util/util.exception';
import { GenerateOtp } from 'src/util/util.otp';
import { Otp } from './entities/auth.entity';

@Controller('api/auth')
@ApiTags('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/register')
  @ApiCreatedResponse({ type: UserEntity })
  @UsePipes(new ValidationPipe())
  @UseFilters(new BadRequestExceptionFilter())
  async create(@Body() request: CreateUserDto) {
    try {
      const otp: number = GenerateOtp();
      request.otp = otp;
      const user = await this.authService.create(request);
      const jwt = this.authService.generateJWT(user);
      this.authService.handleOTP(user, otp);

      return SuccessResponse({
        statusCode: 200,
        message: 'User created successfully',
        data: jwt,
      });
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new ConflictException(e.message);
      } else {
        throw new BadRequestException(e.message);
      }
    }
  }

  @Public()
  @HttpCode(200)
  @Post('/login')
  @ApiCreatedResponse({ type: UserEntity })
  async login(@Body() request: CreateUserDto) {
    try {
      const user = await this.authService.login(request);
      if (user?.verified === false) {
        throw new NotAcceptableException('User not verified');
      }
      const otp: number = GenerateOtp();
      await this.authService.updateOtp(user, otp);
      const jwt = this.authService.generateJWT(user);
      this.authService.handleOTP(request, otp);
      return SuccessResponse({
        statusCode: 200,
        message: 'User logged in successfully',
        data: jwt,
      });
    } catch (e: any) {
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
    try {
      const userRecord = await this.authService.verifyOtp(
        +user?.sub,
        +request.otp,
      );
      const jwt = this.authService.generateJWT(userRecord);
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
