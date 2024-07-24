import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { UserSessionController } from '../controllers/user.session.controller';
import { userSchema } from '../dtos/user.dto';
import { UserFactory } from '../factories/user.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const userRoute = Router();

const userController = new UserController(UserFactory.getServiceInstance());
const userSessionController = new UserSessionController(
  UserFactory.getServiceInstance(),
);

userRoute.post(
  '/',
  validator({ schema: userSchema, type: ParamsType.BODY }),
  userController.create,
);
userRoute.post('/session', userSessionController.create);
