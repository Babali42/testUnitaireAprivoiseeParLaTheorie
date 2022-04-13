export class Store{
    inventory : number[]; 
    
    GetInventory(product: Product): number{
        return this.inventory[product];
    }

    AddInventory(product: Product, quantity: number) {
        this.inventory[product] = quantity;
    }
}

export enum Product{
    Shampoo,
    Book
}