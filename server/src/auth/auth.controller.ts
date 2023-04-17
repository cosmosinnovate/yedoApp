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
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { SuccessResponse } from 'src/util/util.response';
import { Public } from './decorators/decorators.public';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { BadRequestExceptionFilter } from 'src/util/util.exception';
import { GenerateOtp } from 'src/util/util.otp';


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
      const user = await this.authService.create(request);
      const jwt = this.authService.generateJWT(user);
      const otp: number = GenerateOtp();
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
      const jwt = this.authService.generateJWT(user);
      const otp: number = GenerateOtp();
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

  @Post('/otp/verify')
  @ApiCreatedResponse({ type: UserEntity })
  verifyAccount(
    @Headers() headers: Record<string, string>,
    @Body() request: Record<string, any>,
  ) {
    const authToken = headers.authorization;
    const contentType = headers['content-type'];
    Logger.log(authToken, 'AuthController:authToken');
    Logger.log(contentType, 'AuthController:contentType');
    try {
      // return this.authService.verifyOtp(+id, +request.otp);
      return 'success';
    } catch (e: any) {
      return SuccessResponse({
        statusCode: 200,
        message: 'User logged in successfully',
        data: null,
      });
    }
  }
}
