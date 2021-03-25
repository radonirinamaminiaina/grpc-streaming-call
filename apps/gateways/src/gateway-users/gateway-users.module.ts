import { Module } from '@nestjs/common';
import { GatewayUsersController } from './gateway-users.controller';
@Module({
  controllers: [GatewayUsersController],
})
export class GatewayUsersModule {}
