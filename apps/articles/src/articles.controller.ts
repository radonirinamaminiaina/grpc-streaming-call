import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamCall } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller()
export class ArticlesController {
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

  @GrpcStreamCall('ArticlesService', 'FindAll')
  findAll(stream: any) {
    stream.on('data', (message) => {
      console.log(message);
      stream.write({
        articles: this.articles,
      });
    });
    /* return of({
      articles: this.articles,
    }); */
  }

  @GrpcMethod('ArticlesService', 'FindOne')
  findOne({ id }: { id: number }) {
    const article = this.articles.filter((article) => article.id === id);
    return of(article[0] || {});
  }
}
