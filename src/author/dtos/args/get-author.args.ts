import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@ArgsType()
export class GetAuthorArgs {
  @Field()
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  id: string;
}
