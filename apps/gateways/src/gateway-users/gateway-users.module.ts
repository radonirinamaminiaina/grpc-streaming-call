import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GatewayUsersController } from './gateway-users.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5010',
          package: 'users',
          protoPath: join(__dirname, '..', 'users', '/proto/users.proto'),
        },
      },
    ]),
  ],
  controllers: [GatewayUsersController],
})
export class GatewayUsersModule {}
