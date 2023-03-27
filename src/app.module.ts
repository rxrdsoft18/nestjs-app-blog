import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthorModule } from './author/author.module';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author/author.entity';
import { Post } from './post/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://mongoadmin:secret@localhost:27019/blog?authSource=admin',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Author, Post],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    AuthorModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
