import { Brand, User } from '.';

export interface Discount {
  id: string,
  brand: Brand | Pick<Brand, 'id' | 'name'>,
  user: User | Pick<User, 'id' | 'name'>,
  value: number
}