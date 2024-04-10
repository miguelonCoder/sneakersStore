import { Model } from "mongoose";
import { BaseRepository } from "../base-repository";
import { DiscountDocument } from "../models";
import { Discount } from "../../../domain/models";
import { IDiscountRepository } from "../../../domain/repositories/discount-repository.abstract";

export class DiscountRepository 
extends BaseRepository<DiscountDocument> 
implements IDiscountRepository
{
  protected model: Model<DiscountDocument>;

  constructor(model: Model<DiscountDocument>) {
    super(model)
      this.model = model;
  }

  async getDiscountByBrandAndUser(idUser: string, idBrand: string) : Promise<Discount | null> {
    return this.model
      .findOne({
        brand: idBrand,
        user: idUser
      })
      .exec()
  }
}