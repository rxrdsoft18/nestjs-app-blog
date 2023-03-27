import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpvotePostInput {
  @Field()
  postId: string;
}
