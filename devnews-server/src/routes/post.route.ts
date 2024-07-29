import { Router } from 'express';

import upload from '../config/multer.config';
import { PostController } from '../controllers/post.controller';
import { PostFactory } from '../factories/post.factory';

export const postRoute = Router();

const postController = new PostController(PostFactory.getServiceInstance());

postRoute.post('/', upload.single('file'), postController.create);
