import multer from 'multer';
import { resolve, extname } from 'path';
import { v4 } from 'uuid';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'assets'),
    filename: (req, file, cb) => {
      cb(null, v4() + extname(file.originalname));
    },
  }),
};
