export class Leader {
  public id: string;
  public name: string;
  public abbr: string;
  public image: string;
  public designation: string;
  public description: string;
  public featured: boolean;

  constructor(id: string, name: string, image: string, abbr: string, designation: string, description: string,
              featured: boolean) {
    this.id = id;
    this.name = name;
    this.abbr = abbr;
    this.image = image;
    this.designation = designation;
    this.description = description;
    this.featured = featured;
  }
}
