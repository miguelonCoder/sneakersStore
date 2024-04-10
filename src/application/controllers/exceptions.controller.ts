
import { Request, Response } from 'express';
import { injectable } from "tsyringe";

const NOT_FOUND_MESSAGE = 'The source is not found'

@injectable()
export class ExceptionsController {

  static routeNotFound(_: Request, res: Response){
    res.status(404).json({
      message: NOT_FOUND_MESSAGE,
      status: 404
    })
  }

  static errorHandler(err: Error, _: Request, res: Response, ) {
    res.status(404).json({
      message: err.message,
      status: 500
    })
  }
}