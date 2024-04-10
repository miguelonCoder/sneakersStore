
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from "tsyringe";
import { IProductUseCases } from '../../domain/use-cases/product-use-cases.abstract';

@injectable()
export class ProductController {

  constructor(
    @inject('IProductUseCases') private readonly _productUseCases: IProductUseCases
  ){}

  async getProductsInStock(_: Request, res: Response, next: NextFunction){
    try{
      res.send(await this._productUseCases.getProductsInStock())
    }catch(err){
      res.statusCode = 500
      next(err)
    }
  }
}