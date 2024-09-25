// import { Field, InputType, Int } from '@nestjs/graphql';

// @InputType()
// export class UpdateProductInput {
//   @Field({ nullable: true })
//   name?: string;

//   @Field({ nullable: true })
//   desc?: string;

//   @Field(() => Int)
//   id: number;
// }

import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => Int)
  id: number;
}
