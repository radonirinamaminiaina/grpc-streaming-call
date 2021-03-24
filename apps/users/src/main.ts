import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5010',
      package: 'users',
      protoPath: join(__dirname, 'proto/users.proto'),
    },
  });

  app.startAllMicroservicesAsync();
  Logger.log('Service Users started');
}
bootstrap();
