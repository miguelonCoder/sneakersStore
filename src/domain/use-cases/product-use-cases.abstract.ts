import { Product } from "../models";

export abstract class IProductUseCases {
  abstract getProductsInStock() : Promise<Product[]>
}