import { Router } from 'express';

import upload from '../config/multer.config';
import { PostController } from '../controllers/post.controller';
import { PostFactory } from '../factories/post.factory';
import authMiddleware from '../middlewares/auth.middleware';
import validateForm from '../middlewares/post-validator.middleware';

export const postRoute = Router();

const postController = new PostController(PostFactory.getServiceInstance());

postRoute.use(authMiddleware);
postRoute.post('/', upload.single('file'), validateForm, postController.create);
postRoute.get('/:category', postController.findByCategory);
