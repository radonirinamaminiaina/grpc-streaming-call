import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GatewayUsersController } from './gateway-users.controller';
import { GatewayUsersService } from './gateway-users.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'users',
          protoPath: join(__dirname, '..', 'users', '/proto/users.proto'),
        },
      },
    ]),
  ],
  controllers: [GatewayUsersController],
  providers: [GatewayUsersService],
})
export class GatewayUsersModule {}
