export type UserDTO = {
  name: string;
  email: string;
  role: 'user' | 'editor';
  password: string;
};
