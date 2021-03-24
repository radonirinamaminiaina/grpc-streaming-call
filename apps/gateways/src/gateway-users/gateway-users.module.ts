import { grpcConfiguration, GrpcConfiguration } from '@app/grpc-config';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GatewayUsersController } from './gateway-users.controller';

const { users } = grpcConfiguration() as GrpcConfiguration;

@Module({
  imports: [
    ClientsModule.register([
      {
        name: users.name,
        transport: Transport.GRPC,
        options: {
          url: users.host,
          package: users.package,
          protoPath: join(__dirname, users.protoPathClient),
        },
      },
    ]),
  ],
  controllers: [GatewayUsersController],
})
export class GatewayUsersModule {}
