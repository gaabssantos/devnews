import { UserEntity } from '../../entities/user.entity';
import { UserModel } from '../schemas/user.schema';

export class UserRepository {
  constructor(private userModel: typeof UserModel) {}

  create = async ({
    name,
    email,
    password,
    role,
  }: UserEntity): Promise<UserEntity> => {
    const userCreated = await this.userModel.create({
      name,
      email,
      password,
      role,
    });

    return userCreated.toObject<UserEntity>();
  };

  findByEmail = async (email: string): Promise<UserEntity | undefined> => {
    const user = await this.userModel.findOne({ email });

    return user?.toObject<UserEntity>();
  };
}
