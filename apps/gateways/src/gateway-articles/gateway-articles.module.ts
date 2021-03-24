import { GrpcConfiguration, grpcConfiguration } from '@app/grpc-config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GatewayArticlesController } from './gateway-articles.controller';

const { articles } = grpcConfiguration() as GrpcConfiguration;

@Module({
  imports: [
    ConfigModule.forRoot(grpcConfiguration()),
    ClientsModule.register([
      {
        name: articles.name,
        transport: Transport.GRPC,
        options: {
          url: articles.host,
          package: articles.package,
          protoPath: join(__dirname, articles.protoPathClient),
        },
      },
    ]),
  ],
  controllers: [GatewayArticlesController],
})
export class GatewayArticlesModule {}
