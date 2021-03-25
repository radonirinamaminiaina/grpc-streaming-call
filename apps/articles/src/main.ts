import { grpcTransport } from '@app/grpc-config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = grpcTransport('articles');

  app.connectMicroservice<MicroserviceOptions>(options);
  app.startAllMicroservicesAsync();

  Logger.log('Service Articles started');
}
bootstrap();
