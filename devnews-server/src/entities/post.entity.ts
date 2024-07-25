type PostProps = {
  _id?: string;
  title: string;
  content: string;
  image: string;
  category: 'politic' | 'sports' | 'entertainment';
};

export class PostEntity {
  public _id?: string;
  public title: string;
  public content: string;
  public image: string;
  public category: string;

  constructor({ _id, title, content, image, category }: PostProps) {
    this._id = _id;
    this.title = title;
    this.content = content;
    this.image = image;
    this.category = category;
  }
}
