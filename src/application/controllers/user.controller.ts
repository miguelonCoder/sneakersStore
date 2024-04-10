
import { Request, Response } from "express";
import { IUserUseCases } from "../../domain/use-cases/user-use-cases.abstract";
import { inject, injectable } from "tsyringe";

@injectable()
export class UserController {

  constructor(
    @inject('IUserUseCases') private readonly _userUseCases: IUserUseCases
  ){}

  async getAllUsers(_: Request, res: Response){
    res.send(await this._userUseCases.getAllUsers())
  }
}