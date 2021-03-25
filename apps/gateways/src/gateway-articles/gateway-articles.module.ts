import { grpcConfiguration, grpcTransport } from '@app/grpc-config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProviderOptions, ClientsModule } from '@nestjs/microservices';
import { GatewayArticlesController } from './gateway-articles.controller';

const articlesServiceOptions = grpcTransport(
  'articles',
  true,
) as ClientProviderOptions;

@Module({
  imports: [
    ConfigModule.forRoot(grpcConfiguration()),
    ClientsModule.register([articlesServiceOptions]),
  ],
  controllers: [GatewayArticlesController],
})
export class GatewayArticlesModule {}
