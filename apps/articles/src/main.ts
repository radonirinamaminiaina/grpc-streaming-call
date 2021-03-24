import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // init microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'articles',
      protoPath: join(__dirname, 'proto/articles.proto'),
    },
  });

  app.startAllMicroservicesAsync();
  await app.listen(3000, () => Logger.log('Start users at 3000'));
}
bootstrap();
