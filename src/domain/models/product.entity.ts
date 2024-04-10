import { Brand } from ".";

export interface Product {
  id: string,
  model: string,
  brand: Brand | Pick<Brand, 'id' | 'name'>,
  price: number
}