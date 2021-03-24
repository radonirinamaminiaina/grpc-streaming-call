import { Controller, Get } from '@nestjs/common';
import { GatewayUsersService } from './gateway-users.service';

@Controller('users')
export class GatewayUsersController {
  constructor(private usersService: GatewayUsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
