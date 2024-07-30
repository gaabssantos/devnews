import axios from 'axios';

import { Category, CreateUser, User } from './api-types';

export class APIService {
  private static client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  static async createUser(createUserData: CreateUser): Promise<User> {
    const { data } = await APIService.client.post<User>(
      '/user',
      createUserData,
    );

    return data;
  }

  static async getCategories(): Promise<Category[]> {
    this.client.interceptors.request.use(async (config) => {
      const userData = await JSON.parse(
        localStorage.getItem('devnews:userData') as string,
      );

      const token = userData && userData.token;
      config.headers.authorization = `Bearer ${token}`;

      return config;
    });

    const { data } = await APIService.client.get('/categories');

    return data;
  }
}
