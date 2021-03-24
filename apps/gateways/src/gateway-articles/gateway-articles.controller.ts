import { grpcConfiguration } from '@app/grpc-config';
import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ArticlesRpcMethods {
  findAll(params: any): Observable<unknown>;
  findOne(params: { id: number }): Observable<unknown>;
}

@Controller('articles')
export class GatewayArticlesController implements OnModuleInit {
  constructor(
    @Inject(grpcConfiguration().articles.name)
    private readonly client: ClientGrpc,
  ) {}
  private articlesService: ArticlesRpcMethods;

  onModuleInit() {
    this.articlesService = this.client.getService<ArticlesRpcMethods>(
      'ArticlesService',
    );
  }
  @Get()
  @GrpcMethod('ArticlesService', 'FindAll')
  findAll(_: any) {
    return this.articlesService.findAll({});
  }

  @Get(':id')
  @GrpcMethod('ArticlesService', 'FindOne')
  findOne(@Param('id') id: number) {
    return this.articlesService.findOne({ id });
  }
}
