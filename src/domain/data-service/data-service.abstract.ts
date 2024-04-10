import { IGenericRepository } from "../generic-repository/generic-repository.abstract";
import { User } from "../models";
import { IDiscountRepository } from "../repositories/discount-repository.abstract";
import { IProductRepository } from "../repositories/product-repository.abstract";

export abstract class IDataService {
  abstract userRepository: IGenericRepository<User>
  abstract productRepository: IProductRepository
  abstract discountRepository: IDiscountRepository
}