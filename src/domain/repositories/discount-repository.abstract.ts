import { IGenericRepository } from '../generic-repository/generic-repository.abstract';
import { Discount } from '../models';

export interface IDiscountRepository extends IGenericRepository<Discount> {
  getDiscountByBrandAndUser(idUser: string, idBrand: string) : Promise<Discount | null>
}