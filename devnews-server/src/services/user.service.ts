import { UserRepository } from '../database/repositories/user.respository';
import { UserDTO } from '../dtos/user.dto';
import { UserEntity } from '../entities/user.entity';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  create = async ({ name, email, role, password }: UserDTO) => {
    const user = new UserEntity({
      name,
      email,
      role,
      password,
    });

    const userCreated = await this.userRepository.create(user);

    return userCreated;
  };

  findByEmail = async (email: string) => {
    const user = await this.userRepository.findByEmail(email);

    return user;
  };
}
