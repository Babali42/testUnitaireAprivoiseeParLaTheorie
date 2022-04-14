import {Product, Store} from "./store";
import {Customer} from "./customer";

describe("Classical Chicago Test", () => {
    describe("When there is enough inventory", () => {
        it("Purchase should succeed", () => {
            //Arrange
            var store = Store.Create();
            store.AddInventory(Product.Shampoo, 10);
            var customer = Customer.Create();

            //Act
            var success = customer.Purchase(store, Product.Shampoo, 5);

            //Assert
            expect(success).toBe(true);
            expect(store.GetInventory(Product.Shampoo)).toBe(5);
        });
    });

    describe("When there is not enough inventory", () => {
        it("Purchase should fail", () => {
            //Arrange
            var store = Store.Create();
            store.AddInventory(Product.Shampoo, 10);
            var customer = Customer.Create();

            //Act
            var success = customer.Purchase(store, Product.Shampoo, 5000);

            //Assert
            expect(success).toBe(false);
            expect(store.GetInventory(Product.Shampoo)).toBe(10);
        });
    });
});
