import { CategoryEntity } from './category.entity';

type PostProps = {
  _id?: string;
  title: string;
  content: string;
  image: string;
  category: CategoryEntity;
};

export class PostEntity {
  public _id?: string;
  public title: string;
  public content: string;
  public image: string;
  public category: CategoryEntity;

  constructor({ _id, title, content, image, category }: PostProps) {
    this._id = _id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.category = category;
  }
}
