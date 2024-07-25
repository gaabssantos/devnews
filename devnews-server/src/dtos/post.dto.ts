import { z } from 'zod';

export type PostDTO = {
  title: string;
  content: string;
  image: string;
  category: 'politic' | 'sports' | 'entertainment';
};

export const postSchema = {
  title: z.string().trim().min(5),
  content: z.string().trim().min(10).max(255),
  image: z.string(),
  category: z.enum(['politic', 'sports', 'entertainment']),
};
