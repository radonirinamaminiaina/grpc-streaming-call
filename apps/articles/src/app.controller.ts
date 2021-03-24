import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('ArticlesService', 'GetAll')
  getAll(_: any) {
    return {
      id: 25,
      title: 'gRPC title',
      content: 'GRPC content',
    };
  }
}
