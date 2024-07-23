import { Router } from 'express';

import { baseRoute } from './base.route';
import { userRoute } from './user.route';

export const router = Router();

router.use('/', baseRoute);
router.use('/user', userRoute);
