import { GrpcConfiguration, grpcConfiguration } from '@app/grpc-config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const { users } = grpcConfiguration() as GrpcConfiguration;

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: users.host,
      package: users.package,
      protoPath: join(__dirname, users.protoPathServer),
    },
  });

  app.startAllMicroservicesAsync();
  Logger.log('Service Users started');
}
bootstrap();
