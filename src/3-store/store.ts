export class Store{
    inventory : number[] = [0,0]; 
    
    GetInventory(product: Product): number{
        return this.inventory[product];
    }

    AddInventory(product: Product, quantity: number) {
        this.inventory[product] = quantity;
    }

    HasEnoughInventory(product: Product, quantity: number) {
        return this.inventory[product] >= quantity;
    }

    RemoveInventory(product: Product, orderedQuantity: number) {
        this.inventory[product] -= orderedQuantity;
    }

    private constructor() {
    }
    
    static Create() : Store{
        return new Store();
    }
}

export enum Product{
    Shampoo,
    Book
}