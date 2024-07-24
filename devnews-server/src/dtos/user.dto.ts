import { z } from 'zod';

export type UserDTO = {
  name: string;
  email: string;
  role: 'user' | 'editor';
  password: string;
};

export const userSchema = {
  name: z.string().regex(/[A-z]{3}[' '][A-z]{3}/),
  email: z.string().email(),
  role: z.enum(['user', 'editor']),
  password: z.string().trim().min(8),
};
