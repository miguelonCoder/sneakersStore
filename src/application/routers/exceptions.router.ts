// userRoutes.ts
import express from 'express';

import { ExceptionsController } from '../controllers/exceptions.controller';


const router = express.Router();


router.get('*', ExceptionsController.routeNotFound);

export default router;