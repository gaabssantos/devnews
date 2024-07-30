export type CreateUser = {
  name: string;
  email: string;
  role: 'user' | 'editor';
  password: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'editor';
  password: string;
};

export type Category = {
  _id: string;
  name: string;
};
