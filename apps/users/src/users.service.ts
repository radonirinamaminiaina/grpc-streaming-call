import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface ArticlesService {
  getAll(param: any): Observable<unknown>;
}
@Injectable()
export class UsersService implements OnModuleInit {
  private articlesService: ArticlesService;

  constructor(@Inject('ARTICLES_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.articlesService = this.client.getService<ArticlesService>(
      'ArticlesService',
    );
  }

  getAll(): Observable<unknown> {
    return this.articlesService.getAll({});
  }
}
