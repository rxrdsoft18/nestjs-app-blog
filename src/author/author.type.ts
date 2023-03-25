import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PostType } from '../post/post.type';

@ObjectType('Author')
export class AuthorType {
  @Field((type) => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => [PostType])
  posts: PostType[];
}
