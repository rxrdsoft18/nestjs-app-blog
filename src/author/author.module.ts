import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { PostModule } from '../post/post.module';

@Module({
  imports: [TypeOrmModule.forFeature([Author]), PostModule],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
