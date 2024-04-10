import { Model } from "mongoose";
import { BaseRepository } from "../base-repository";
import { ProductDocument } from "../models";
import { Product } from "../../../domain/models";
import { IProductRepository } from "../../../domain/repositories/product-repository.abstract";

export class ProductRepository 
extends BaseRepository<ProductDocument>  
implements IProductRepository  {
  protected model: Model<ProductDocument>;

  constructor(model: Model<ProductDocument>) {
    super(model)
      this.model = model;
  }

  async getProductsInStock() : Promise<Product[]> {
    return this.model
    .find({ cantInStock: { $gt: 0}})
    .populate('brand')
    .exec()
  }

  async findByName(name: string): Promise<Product | null> {
    return this.model
      .findOne({
        nameModel: name
      })
      .exec()
  }
}