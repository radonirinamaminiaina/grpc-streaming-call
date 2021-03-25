import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';

@Module({
  imports: [],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
