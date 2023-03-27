import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetPostsArgs {
  @Field()
  authorId: string;
}
