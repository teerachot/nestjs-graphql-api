import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetProductsArgs {
  @Field(() => Int, { defaultValue: 1 })
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  limit: number;
}
