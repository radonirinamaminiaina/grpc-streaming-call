import { grpcConfiguration } from '@app/grpc-config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { articles } = grpcConfiguration();
  // init microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: articles.url,
      package: articles.package,
      protoPath: join(__dirname, articles.protoPathServer),
    },
  });

  app.startAllMicroservicesAsync();
  Logger.log('Service Articles started');
}
bootstrap();
