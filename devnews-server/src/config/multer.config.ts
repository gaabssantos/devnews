import multer from 'multer';
import { v4 } from 'uuid';

const storage = multer.diskStorage({
  filename: (_, file, cb) => {
    cb(null, v4() + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
