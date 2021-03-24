import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller()
export class AppController {
  articles = [
    {
      id: 1,
      title: 'gRPC is great',
      content: 'gRPC is great for microservice',
    },
    {
      id: 2,
      title: 'Nestjs is great too',
      content: 'Thank you nest',
    },
  ];

  @GrpcMethod('ArticlesService', 'findAll')
  findAll(_: any) {
    return of({
      articles: this.articles,
    });
  }

  @GrpcMethod('ArticlesService', 'findOne')
  findOne({ id }: { id: number }) {
    const article = this.articles.filter((article) => article.id === id);
    return of(article[0] || {});
  }
}
