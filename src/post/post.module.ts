import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';

@Module({
  providers: [PostService, PostResolver],
  exports: [PostService],
  imports: [],
})
export class PostModule {}
