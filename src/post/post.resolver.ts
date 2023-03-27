import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostType } from './post.type';
import { PostService } from './post.service';
import { UpvotePostInput } from './dtos/inputs/upvote-post.input';
import { CreatePostInput } from './dtos/inputs/create-post.input';

@Resolver((of) => PostType)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query((returns) => [PostType])
  async posts() {
    return this.postService.findAll();
  }

  @Mutation((returns) => PostType)
  async upvotePost(@Args('upvotePostInput') upvotePostInput: UpvotePostInput) {
    return this.postService.upvoteById(upvotePostInput);
  }

  @Mutation((returns) => PostType)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    console.log('createPostInput', createPostInput);
    return this.postService.create(createPostInput);
  }
}
