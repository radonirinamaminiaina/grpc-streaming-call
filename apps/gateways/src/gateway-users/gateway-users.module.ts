import { grpcTransport } from '@app/grpc-config';
import { Module } from '@nestjs/common';
import { ClientProviderOptions, ClientsModule } from '@nestjs/microservices';
import { GatewayUsersController } from './gateway-users.controller';

const usersServiceOptions = (grpcTransport(
  'users',
  true,
) as unknown) as ClientProviderOptions;

@Module({
  imports: [ClientsModule.register([usersServiceOptions])],
  controllers: [GatewayUsersController],
})
export class GatewayUsersModule {}
