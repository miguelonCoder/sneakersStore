import "reflect-metadata";
import express from "express";

import userRouter from './application/routers/user.router'
import productRouter from './application/routers/product.router'
import discountRouter from './application/routers/discount.router'
import exceptionsRouter from './application/routers/exceptions.router'
import { ExceptionsController } from "./application/controllers/exceptions.controller";

function bootstrap() {
  const app = express()
  app.use(express.json())
  const PORT = 3000

  app.use('/user', userRouter)
  app.use('/products', productRouter)
  app.use('/price', discountRouter)
  app.use('*', exceptionsRouter)
  app.use(ExceptionsController.errorHandler)

  app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
  })
}

bootstrap()

