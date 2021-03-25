import { grpcTransport } from '@app/grpc-config';
import { Controller, Get, OnModuleInit, Param } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UsersRpcMethods {
  findAll(params: any): Observable<unknown>;
  findOne(params: { id: number }): Observable<unknown>;
}

@Controller('users')
export class GatewayUsersController implements OnModuleInit {
  @Client(grpcTransport('users', 'client'))
  private readonly client: ClientGrpc;
  private usersService: UsersRpcMethods;

  onModuleInit() {
    this.usersService = this.client.getService<UsersRpcMethods>('UsersService');
  }
  @Get()
  @GrpcMethod('UsersService', 'FindAll')
  findAll(_: any) {
    return this.usersService.findAll({});
  }

  @Get(':id')
  @GrpcMethod('UsersService', 'FindOne')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne({ id });
  }
}
