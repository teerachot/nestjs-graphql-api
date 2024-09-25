import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  desc: string;
}
