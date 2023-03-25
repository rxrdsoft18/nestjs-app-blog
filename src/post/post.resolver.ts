import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostType } from './post.type';
import { PostService } from './post.service';
import { UpdatePostInput } from './dtos/inputs/update-post.input';

@Resolver((of) => PostType)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation((returns) => PostType)
  async upvotePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.upvoteById(updatePostInput);
  }
}
