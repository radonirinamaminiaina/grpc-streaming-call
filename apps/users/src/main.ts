import { grpcTransport } from '@app/grpc-config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const options = grpcTransport('users') as MicroserviceOptions;

  app.connectMicroservice<MicroserviceOptions>(options);
  app.startAllMicroservicesAsync();

  Logger.log('Service Users started');
}
bootstrap();
