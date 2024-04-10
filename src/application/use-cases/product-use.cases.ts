import { inject, injectable } from "tsyringe";
import { IDataService } from "../../domain/data-service/data-service.abstract";
import { Product } from "../../domain/models";
import { IProductUseCases } from "../../domain/use-cases/product-use-cases.abstract";

@injectable()
export class ProductUseCases implements IProductUseCases {
  constructor( @inject('IDataService') private readonly _dataService: IDataService){}

  getProductsInStock(): Promise<Product[]> {
    try{
      return this._dataService.productRepository.getProductsInStock()
    }catch(err){
      throw new Error('Error while try to connect database')
    }
  }
  
}