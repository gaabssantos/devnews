import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../configs/multer.config';
import { PostController } from '../controllers/post.controller';
import { PostFactory } from '../factories/post.factory';

export const postRoute = Router();

const postController = new PostController(PostFactory.getServiceInstance());
const upload = multer(multerConfig);

postRoute.post('/', upload.single('file'), postController.create);
