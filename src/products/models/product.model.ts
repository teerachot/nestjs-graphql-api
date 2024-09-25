// import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Transform } from 'class-transformer';
// import { capitalize } from 'lodash';

// @ObjectType()
// export class Product {
//   @Field(() => Int)
//   id: number;

//   @Field()
//   @Transform(({ value }) => capitalize(value))
//   name: string;

//   @Field()
//   desc: string;

//   constructor(product: Product) {
//     Object.assign(this, product);
//   }
// }

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from 'src/categories/models/category.model';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  desc: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field(() => [Category])
  categories: Category[];
}
