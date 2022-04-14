import {Product, Store} from "./store";
import {Customer} from "./customer";
import {anyNumber, instance, mock, verify, when} from 'ts-mockito';

describe("London mockist Test", () => {
    describe("When there is enough inventory", () => {
        it("Purchase should succeed", () => {
            var storeMock = mock(Store);
            var customer = Customer.Create();
            when(storeMock.HasEnoughInventory(Product.Shampoo, anyNumber())).thenReturn(true);
            
            //Act
            var success = customer.Purchase(instance(storeMock), Product.Shampoo, 5);
            
            //Assert
            expect(success).toBe(true);
            verify(storeMock.RemoveInventory(0, 5)).once();
        });
    });

    describe("When there is not enough inventory", () => {
        it("Purchase should fail", () => {
            var storeMock = mock(Store);
            var customer = Customer.Create();
            when(storeMock.HasEnoughInventory(Product.Shampoo, anyNumber())).thenReturn(false);

            //Act
            var success = customer.Purchase(instance(storeMock), Product.Shampoo, 50000);

            //Assert
            expect(success).toBe(false);
            verify(storeMock.RemoveInventory(Product.Shampoo, 50000)).never();
        });
    });
});