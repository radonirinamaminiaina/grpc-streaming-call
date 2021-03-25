import { grpcTransport } from '@app/grpc-config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ArticlesModule } from './articles.module';

async function bootstrap() {
  const app = await NestFactory.create(ArticlesModule);
  const options = grpcTransport('articles') as MicroserviceOptions;

  app.connectMicroservice<MicroserviceOptions>(options);
  app.startAllMicroservicesAsync();

  Logger.log('Service Users started');
}
bootstrap();
