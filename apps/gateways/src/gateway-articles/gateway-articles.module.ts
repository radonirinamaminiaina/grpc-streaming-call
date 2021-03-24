import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GatewayArticlesController } from './gateway-articles.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ARTICLES_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'articles',
          protoPath: join(__dirname, '..', 'articles', '/proto/articles.proto'),
        },
      },
    ]),
  ],
  controllers: [GatewayArticlesController],
})
export class GatewayArticlesModule {}
