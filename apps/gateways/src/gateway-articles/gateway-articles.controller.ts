import { grpcTransport } from '@app/grpc-config';
import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ArticlesRpcMethods {
  findAll(params: any): Observable<unknown>;
  findOne(params: { id: number }): Observable<unknown>;
}
@Controller('articles')
export class GatewayArticlesController implements OnModuleInit {
  @Client(grpcTransport('articles', 'client'))
  private client: ClientGrpc;

  private articlesService: ArticlesRpcMethods;

  onModuleInit() {
    this.articlesService = this.client.getService<ArticlesRpcMethods>(
      'ArticlesService',
    );
  }
  @Get()
  findAll(_: any) {
    return this.articlesService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articlesService.findOne({ id });
  }
}
