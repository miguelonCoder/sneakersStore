import { inject, injectable } from "tsyringe";
import { IDataService } from "../../domain/data-service/data-service.abstract";

import { IDiscountUseCases } from "../../domain/use-cases/discount-use-cases.abstract";

@injectable()
export class DiscountUseCases implements IDiscountUseCases {
  constructor( @inject('IDataService') private readonly _dataService: IDataService){}

  async getPriceByUserAndProduct(idUser: string, productName: string): Promise<any> {
    try {
      const product = await this._dataService.productRepository.findByName(productName)

      if (!product) throw new Error('El producto no se encuentra registrado')

      console.log(product)

      const discount = await this._dataService.discountRepository.getDiscountByBrandAndUser(idUser, product.brand)

      console.log(discount, productName, idUser)

      return discount ? {
        price: this.calculateDiscount(product.price, discount.value),
        status: 'With discount'
      } : {
        price: product.price,
        status: 'Without discount'
      }
      
    }catch(err) {
      throw new Error('Error while try to connect database')
    }
  }

  private calculateDiscount(price: number, discount: number): number {
    return price * (discount / 100 )
  }
  
}