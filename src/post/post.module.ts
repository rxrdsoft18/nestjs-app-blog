import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';

@Module({
  providers: [PostService, PostResolver],
  exports: [PostService],
  imports: [TypeOrmModule.forFeature([Post])],
})
export class PostModule {}
