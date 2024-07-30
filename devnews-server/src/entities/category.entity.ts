type CategoryProps = {
  _id?: string;
  name: string;
};

export class CategoryEntity {
  public _id?: string;
  public name: string;

  constructor({ _id, name }: CategoryProps) {
    this._id = _id;
    this.name = name;
  }
}
