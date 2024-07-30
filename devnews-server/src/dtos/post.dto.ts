import { z } from 'zod';

export type PostDTO = {
  title: string;
  content: string;
  image: string;
  category: string;
};

export const postSchema = z.object({
  title: z.string().trim().min(5),
  content: z.string().trim().min(10).max(255),
  category: z.string(),
  image: z.custom<Express.Multer.File>(
    (file) => file && typeof file === 'object' && 'fieldname' in file,
  ),
});

export type FormData = z.infer<typeof postSchema>;
