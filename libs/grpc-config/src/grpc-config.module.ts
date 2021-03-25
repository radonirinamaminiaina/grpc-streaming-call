import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GrpcConfigService } from './grpc-config.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [GrpcConfigService],
  exports: [GrpcConfigService],
})
export class GrpcConfigModule {}
