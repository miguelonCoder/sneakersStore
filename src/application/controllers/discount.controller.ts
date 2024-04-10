
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from "tsyringe";
import { IDiscountUseCases } from '../../domain/use-cases/discount-use-cases.abstract';

@injectable()
export class DiscountController {

  constructor(
    @inject('IDiscountUseCases') private readonly _discountUseCases: IDiscountUseCases
  ){}

  async getDiscountByUserAndProduct(req: Request, res: Response, next: NextFunction){
    try{
      res.send(await this._discountUseCases.getPriceByUserAndProduct(req.params.user_id, req.params.product_name))
    }catch(err){
      res.statusCode = 500
      next(err)
    }
  }
}