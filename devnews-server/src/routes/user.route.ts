import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { UserFactory } from '../factories/user.factory';

export const userRoute = Router();

const userController = new UserController(UserFactory.getServiceInstance());

userRoute.post('/', userController.create);
