import {Product, Store} from "./store";

class Customer {
    Purchase(store: Store, Shampoo: Product, number: number) {
        
    }
}

it("PurchaseSucceedsWhenEnoughInventory", cb => {
    //Arrange
    var store = new Store();
    store.AddInventory(Product.Shampoo, 10);
    var customer = new Customer();
    
    //Act
    var success = customer.Purchase(store, Product.Shampoo, 5);
    
    //Assert
    expect(success).toBe(true);
    expect(store.GetInventory(Product.Shampoo)).toBe(5);
});