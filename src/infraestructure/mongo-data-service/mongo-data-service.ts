import { connect } from "mongoose";
import { IDataService } from "../../domain/data-service/data-service.abstract";
import { BaseRepository } from "./base-repository";
import { UserDocument, UserModel } from './models/user.model';
import { injectable } from "tsyringe";
import 'dotenv/config'

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

  userRepository: BaseRepository<UserDocument> = new BaseRepository(UserModel)
}