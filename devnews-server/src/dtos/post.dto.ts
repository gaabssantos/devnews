import { z } from 'zod';

import { POST_ENUM } from '../enums/post.enum';

export type PostDTO = {
  title: string;
  content: string;
  image: string;
  category: POST_ENUM;
};

export const postSchema = z.object({
  title: z.string().trim().min(5),
  content: z.string().trim().min(10).max(255),
  image: z.string().optional(),
  category: z.nativeEnum(POST_ENUM),
});

export type PostInput = z.infer<typeof postSchema>;
