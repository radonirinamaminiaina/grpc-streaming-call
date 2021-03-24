import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GatewaysModule } from './gateways.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewaysModule);
  await app.listen(3001);
  Logger.log('Listen gateways in 3001');
}
bootstrap();
