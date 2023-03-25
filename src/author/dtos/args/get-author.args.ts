import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field()
  id: string;
}
