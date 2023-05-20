import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation, Context,
} from '@nestjs/graphql';
import { AuthorType } from './author.type';
import { AuthorService } from './author.service';
import { PostService } from '../post/post.service';
import { GetAuthorArgs } from './dtos/args/get-author.args';
import { CreateAuthorInput } from './dtos/inputs/create-author.input';
import {PostType} from "../post/post.type";

@Resolver((of) => AuthorType)
export class AuthorResolver {
  constructor(
    private authorsService: AuthorService,
    private postsService: PostService,
  ) {}

  @Query((returns) => [AuthorType])
  async authors() {
    return this.authorsService.findAll();
  }

  @Query((returns) => AuthorType)
  async author(@Args() getAuthorArgs: GetAuthorArgs) {
    return this.authorsService.findOneById(getAuthorArgs.id);
  }

  @Mutation(() => AuthorType)
  async createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput,
  ) {
    return this.authorsService.create(createAuthorInput);
  }

  @ResolveField((returns) => [PostType])
  async posts(@Parent() author: AuthorType) {
    const { id } = author;
    return this.postsService.getPostsByAuthorId({ authorId: id });
  }
}
