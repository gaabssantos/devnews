import { z } from 'zod';

export type CategoryDTO = {
  name: string;
};

export const categorySchema = {
  name: z.string(),
};
