import { IGenericRepository } from "../generic-repository/generic-repository.abstract";
import { User } from "../models";

export abstract class IDataService {
  abstract userRepository: IGenericRepository<User>
}