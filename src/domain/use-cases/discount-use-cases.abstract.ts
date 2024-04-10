export abstract class IDiscountUseCases {
  abstract getPriceByUserAndProduct(idUser: string, productName: string): Promise<any>
}