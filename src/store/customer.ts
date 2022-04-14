import {Product, Store} from "./store";

export class Customer {
    Purchase(store: Store, product: Product, orderedQuantity: number): boolean {
        if(!store.HasEnoughInventory(product, orderedQuantity))
            return false;

        store.RemoveInventory(product, orderedQuantity);
        return true;
    }
    
    static Create() : Customer{
        return new Customer()
    }

    private constructor() {
    }
}