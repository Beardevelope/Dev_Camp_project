import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './services/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly userService: UserService,) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.createUser(createUserDto)

    return {
      id: user.id,
      name:user.name,
      email: user.email,
      phone:user.phone
    }
  }
}
