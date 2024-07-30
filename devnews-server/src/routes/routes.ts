import { Router } from 'express';

import authMiddleware from '../middlewares/auth.middleware';
import { baseRoute } from './base.route';
import { categoryRoute } from './category.route';
import { postRoute } from './post.route';
import { userRoute } from './user.route';

export const router = Router();

router.use('/', baseRoute);
router.use('/user', userRoute);
router.use(authMiddleware);
router.use('/posts', postRoute);
router.use('/categories', categoryRoute);
