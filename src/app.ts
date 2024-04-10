import "reflect-metadata";
import express from "express";
import userRoute from './application/routers/user.router'

function bootstrap() {
  const app = express()
  app.use(express.json())
  const PORT = 3000

  app.use('/user', userRoute)

  app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
  })

}

bootstrap()

