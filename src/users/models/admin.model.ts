// import { Field, ObjectType } from '@nestjs/graphql';
// import { User } from './user.model';

// @ObjectType({
//   implements: () => [User],
// })
// export class Admin extends User {
//   @Field()
//   level: number;

//   constructor(user: Admin) {
//     super(user);
//   }
// }

import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { EmailScalar } from 'src/core/types/email.scalar';
import { Address } from './address.model';
import { Role } from './role.model';

@ObjectType({
  implements: () => [User],
})
export class Admin implements User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => EmailScalar)
  email: string;

  @Field(() => Role)
  role: Role;

  @Field(() => Address, { nullable: true })
  address?: Address;

  @Field()
  level: number;
}
