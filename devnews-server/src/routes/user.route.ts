import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { UserSessionController } from '../controllers/user.session.controller';
import { UserFactory } from '../factories/user.factory';

export const userRoute = Router();

const userController = new UserController(UserFactory.getServiceInstance());
const userSessionController = new UserSessionController(
  UserFactory.getServiceInstance(),
);

userRoute.post('/', userController.create);
userRoute.post('/session', userSessionController.create);
