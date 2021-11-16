export class Order {
    id: number;
    product: string;
    description: string;
    date: number;

    constructor(id, product, description, date) {
        this.id = id;
        this.product = product;
        this.description = description;
        this.date = date;
    }
}
