// userRoutes.ts
import express from 'express';

import { UserController } from '../controllers/user.controller';
import { UserUseCases } from '../use-cases/user-use-cases';
import { MongoDataService } from '../../infraestructure/mongo-data-service/mongo-data-service';
import { container } from 'tsyringe';
import { IUserUseCases } from '../../domain/use-cases/user-use-cases.abstract';
import { IDataService } from '../../domain/data-service/data-service.abstract';

const router = express.Router();

container.register<IDataService>('IDataService', { useClass: MongoDataService });

const userUseCasesImpl = container.resolve(UserUseCases)
container.register<IUserUseCases>('IUserUseCases', { useValue: userUseCasesImpl });

const userControllerImpl = container.resolve(UserController)

router.get('/', userControllerImpl.getAllUsers.bind(userControllerImpl));

export default router;