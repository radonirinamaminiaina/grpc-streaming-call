import { Module } from '@nestjs/common';
import { GatewayUsersModule } from './gateway-users/gateway-users.module';

@Module({
  imports: [GatewayUsersModule],
})
export class GatewaysModule {}
