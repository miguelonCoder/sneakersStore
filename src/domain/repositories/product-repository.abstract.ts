import { IGenericRepository } from '../generic-repository/generic-repository.abstract';
import { Product } from '../models';

export interface IProductRepository extends IGenericRepository<Product> {
  getProductsInStock() : Promise<Product[]>
  findByName: (name: string) => Promise<Product | null>
}