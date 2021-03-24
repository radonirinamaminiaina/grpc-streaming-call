import { Controller, Get, Param } from '@nestjs/common';
import { GatewayUsersService } from './gateway-users.service';

@Controller('users')
export class GatewayUsersController {
  constructor(private usersService: GatewayUsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
