import { inject, injectable } from "tsyringe";
import { IDataService } from "../../domain/data-service/data-service.abstract";
import { User } from "../../domain/models";
import { IUserUseCases } from "../../domain/use-cases/user-use-cases.abstract";

@injectable()
export class UserUseCases implements IUserUseCases {
  constructor( @inject('IDataService') private readonly _dataService: IDataService){}

  getAllUsers(): Promise<User[]> {
    try{
      return this._dataService.userRepository.findAll()
    }catch(err){
      throw new Error('Error while try to connect database')
    }
  }
}