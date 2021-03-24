import { Module } from '@nestjs/common';
import { GatewayUsersModule } from './gateway-users/gateway-users.module';
import { GatewayArticlesModule } from './gateway-articles/gateway-articles.module';

@Module({
  imports: [GatewayUsersModule, GatewayArticlesModule],
})
export class GatewaysModule {}
