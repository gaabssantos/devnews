type UserProps = {
  _id?: string;
  name: string;
  email: string;
  role: 'user' | 'editor';
  password: string;
};

export class UserEntity {
  public _id?: string;
  public name: string;
  public email: string;
  public role: string;
  public password: string;

  constructor({ _id, name, email, role, password }: UserProps) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}
