import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
