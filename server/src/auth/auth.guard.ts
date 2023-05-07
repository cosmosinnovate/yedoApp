import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './decorators/decorators.public';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException("You're not authorized");
    }
    try {
      const decoded = await this.decodedToken(token);
      request['user'] = decoded;
    } catch (error) {
      throw new UnauthorizedException("You're not authorized");
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    try {
      const [type, token] = request.headers.authorization.split(' ');
      return type === 'Bearer' ? token : null;
    } catch (e: any) {
      throw new BadRequestException('Authentication token required');
    }
  }

  private async decodedToken(token: string) {
    const decoded = await this.jwtService.verifyAsync(token, {
      secret: jwtConstants.secret,
    });
    return decoded;
  }
}
