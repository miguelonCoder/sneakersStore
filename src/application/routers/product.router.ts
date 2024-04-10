// userRoutes.ts
import express from 'express';

import { MongoDataService } from '../../infraestructure/mongo-data-service/mongo-data-service';
import { container } from 'tsyringe';
import { IDataService } from '../../domain/data-service/data-service.abstract';
import { ProductUseCases } from '../use-cases/product-use.cases';
import { IProductUseCases } from '../../domain/use-cases/product-use-cases.abstract';
import { ProductController } from '../controllers/product.controller';

const router = express.Router();

container.register<IDataService>('IDataService', { useClass: MongoDataService });

const productUseCasesImpl = container.resolve(ProductUseCases)
container.register<IProductUseCases>('IProductUseCases', { useValue: productUseCasesImpl });

const productControllerImpl = container.resolve(ProductController)

router.get('/', productControllerImpl.getProductsInStock.bind(productControllerImpl));

export default router;