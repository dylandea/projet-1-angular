export class TrainingModel {
  id: string;
  name: string;
  description: string;
  price: number | undefined;
  quantity: number;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number | undefined,
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}
