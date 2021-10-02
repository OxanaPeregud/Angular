export class Leader {
  public id: string;
  public name: string;
  public image: string;
  public featured: boolean;

  constructor(id: string, name: string, image: string, featured: boolean) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.featured = featured;
  }
}
