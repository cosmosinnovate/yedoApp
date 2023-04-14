import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ConflictException,
  NotAcceptableException,
  HttpCode,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { SuccessResponse } from 'src/util/util.response';
import { Public } from './decorators/decorators.public';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('api/auth')
@ApiTags('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(200)
  @Post('/register')
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() request: CreateUserDto) {
    try {
      const jwt = this.authService.create(request);
      Logger.log(jwt);
      return SuccessResponse({
        statusCode: 200,
        message: 'User created successfully',
        data: jwt,
      });
    } catch (e: any) {
      throw new ConflictException(
        'A user with that email address already exists',
      );
    }
  }

  @Public()
  @HttpCode(200)
  @Post('/login')
  @ApiCreatedResponse({ type: UserEntity })
  login(@Body() createUserDto: CreateAuthDto) {
    const user = this.authService.login(createUserDto);
    if (user) {
      throw new NotAcceptableException('Invalid email');
    }

    // Wrap the user in a response object in jwt
    return SuccessResponse({
      statusCode: 200,
      message: 'User logged in successfully',
      data: user,
    });
  }

  @Get('/otp/verify/:id/:otp')
  @ApiCreatedResponse({ type: UserEntity })
  verifyAccount(@Param('id') id: string, @Param('otp') otp: string) {
    try {
      return this.authService.verifyOtp(+id, +otp);
    } catch (e: any) {
      return SuccessResponse({
        statusCode: 200,
        message: 'User logged in successfully',
        data: null,
      });
    }
  }
}
