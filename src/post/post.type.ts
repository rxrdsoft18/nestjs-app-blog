import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Post')
export class PostType {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
