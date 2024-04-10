// userRoutes.ts
import express from 'express';

import { MongoDataService } from '../../infraestructure/mongo-data-service/mongo-data-service';
import { container } from 'tsyringe';
import { IDataService } from '../../domain/data-service/data-service.abstract';
import { DiscountUseCases } from '../use-cases/discount-use-cases';
import { IDiscountUseCases } from '../../domain/use-cases/discount-use-cases.abstract';
import { DiscountController } from '../controllers/discount.controller';


const router = express.Router();

container.register<IDataService>('IDataService', { useClass: MongoDataService });

const discountUseCasesImpl = container.resolve(DiscountUseCases)
container.register<IDiscountUseCases>('IDiscountUseCases', { useValue: discountUseCasesImpl });

const discountControllerImpl = container.resolve(DiscountController)

router.get('/:user_id/:product_name', discountControllerImpl.getDiscountByUserAndProduct.bind(discountControllerImpl));

export default router;