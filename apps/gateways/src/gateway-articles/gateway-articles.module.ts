import { Module } from '@nestjs/common';
import { GatewayArticlesController } from './gateway-articles.controller';

@Module({
  imports: [
    // ClientsModule.register([grpcTransport('articles', 'client') as any]),
  ],
  controllers: [GatewayArticlesController],
})
export class GatewayArticlesModule {}
