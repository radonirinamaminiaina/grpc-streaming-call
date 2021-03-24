import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface UsersRpcMethods {
  findAll(param: any): Observable<unknown>;
}

@Injectable()
export class GatewayUsersService {
  private usersService: UsersRpcMethods;

  constructor(@Inject('USERS_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.usersService = this.client.getService<UsersRpcMethods>('UsersService');
  }

  findAll(): Observable<unknown> {
    return this.usersService.findAll({});
  }
}
