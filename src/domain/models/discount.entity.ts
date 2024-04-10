import { Brand, User } from '.';

export interface Discount {
  brand: Brand ,
  user: User,
  value: number
}