import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UsersRpcMethods {
  findAll(params: any): Observable<unknown>;
  findOne(params: { id: number }): Observable<unknown>;
}

@Injectable()
export class GatewayUsersService implements OnModuleInit {
  private usersService: UsersRpcMethods;

  constructor(@Inject('USERS_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.usersService = this.client.getService<UsersRpcMethods>('UsersService');
  }

  findAll() {
    return this.usersService.findAll({});
  }

  findOne(id: number) {
    return this.usersService.findOne({ id });
  }
}
