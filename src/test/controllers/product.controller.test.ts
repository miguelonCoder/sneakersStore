import express from "express";
import "reflect-metadata";
import request from 'supertest';
import { MongoDataService } from '../../infraestructure/mongo-data-service/mongo-data-service';
import { Product } from '../../domain/models';
import { container, injectable } from 'tsyringe';
import { IDataService } from '../../domain/data-service/data-service.abstract';
import { IProductUseCases } from '../../domain/use-cases/product-use-cases.abstract';
import { ProductController } from '../../application/controllers/product.controller';



@injectable()
class MockDataService extends MongoDataService {

}


//Create a mock with an IProductUseCases implementation overwriting just the methods that have been tested 

@injectable()
class MockProductUseCases implements IProductUseCases {
  getProductsInStock(): Promise<Product[]> {
    return Promise.resolve([
      {
        "_id": "66169b9bf95a004f0d672cb5",
        "nameModel": "Nike Waffle Trainer",
        "price": 350000,
        "cantInStock": 20,
        "brand": {
          "_id": "66169a3df95a004f0d672cae",
          "name": "Nike"
        }
      }
    ])
  }
}

@injectable()
class MockErrorProductUseCases implements IProductUseCases {
  getProductsInStock(): Promise<Product[]> {
    throw new Error('error test')
  }
}

describe('ProductController', () => {
  let app: any
  let controller: ProductController


  beforeAll(() => {
    app = express()
    app.use(express.json())

    //Inject dependencies to create a new app with mocks
    container.register<IDataService>('IDataService', { useClass: MockDataService });

    const productUseCasesImpl = container.resolve(MockProductUseCases)
    container.register<IProductUseCases>('IProductUseCases', { useValue: productUseCasesImpl });

    controller = container.resolve(ProductController)

    //Create router using injected dependencies
    const router = express.Router()
    router.get('/', controller.getProductsInStock.bind(controller))
    app.use('/products', router)

  })


  it('controller should be created', async () => {
    expect(controller).toBeInstanceOf(ProductController)
  });


  it('should get an Products Array', async () => {
    const response = await request(app).get('/products')
    expect(response.status).toBe(200)
    expect(response.body).toHaveLength(1)
  })
});



//-----------------------------------------------------------------------------------------

describe('ProductController with error in useCases', () => {
  let app: any
  let controller: ProductController

  beforeAll(() => {
    app = express()
    app.use(express.json())

    container.register<IDataService>('IDataService', { useClass: MockDataService });

    const productUseCasesImpl = container.resolve(MockErrorProductUseCases)
    container.register<IProductUseCases>('IProductUseCases', { useValue: productUseCasesImpl });

    controller = container.resolve(ProductController)

    const router = express.Router()
    router.get('/', controller.getProductsInStock.bind(controller))
    app.use('/products', router)

  })

  it('controller should be created', async () => {
    expect(controller).toBeInstanceOf(ProductController)
  });

  it('should response an exception', async () => {
    const response = await request(app).get('/products')
    expect(response.status).toBe(500)
  })
});