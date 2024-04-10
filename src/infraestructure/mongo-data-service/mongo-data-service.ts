import { connect } from "mongoose";
import { IDataService } from "../../domain/data-service/data-service.abstract";
import { BaseRepository } from "./base-repository";
import { UserDocument, userModel } from './models/user.model';
import { injectable } from "tsyringe";
import 'dotenv/config'
import { productModel, discountModel, BrandDocument, brandModel } from "./models";
import { ProductRepository } from "./repositories/product-repository";
import { DiscountRepository } from "./repositories/discount-repository";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING!

@injectable()
export class MongoDataService implements IDataService {

  constructor(){
    this.connect()
  }

  async connect(){
    try{
      await connect(CONNECTION_STRING)
    }catch(e){
      console.log(e)
    }

  }

  userRepository: BaseRepository<UserDocument> = new BaseRepository(userModel)
  productRepository: ProductRepository = new ProductRepository(productModel)
  discountRepository: DiscountRepository = new DiscountRepository(discountModel)
  brandRepository: BaseRepository<BrandDocument> = new BaseRepository(brandModel)
}