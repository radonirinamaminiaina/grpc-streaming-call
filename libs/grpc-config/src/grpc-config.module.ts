import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { grpcConfiguration } from './configuration';
import { GrpcConfigService } from './grpc-config.service';

@Module({
  imports: [ConfigModule.forRoot(grpcConfiguration())],
  providers: [GrpcConfigService],
  exports: [GrpcConfigService],
})
export class GrpcConfigModule {}
