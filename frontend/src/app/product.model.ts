export class Product {
  public id: number;
  public name: string;
  public price: number;
  public imagePath: string;
  public description: string;


constructor(id: number ,name: string, price: number, image: string , description: string) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.imagePath = image;
  this.description = description;
}
}