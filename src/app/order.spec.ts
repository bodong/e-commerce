/* tslint:disable:no-unused-variable */
  
import { TestBed, async } from '@angular/core/testing';
import { Order } from './order';
import { OrderItem } from './order-item';


describe('Order: order', () => {
    let items:Array<OrderItem> = [
        new OrderItem('test', 1, 10),
        new OrderItem('test', 2, 20),
        new OrderItem('test', 3, 50),
    ]
    let order:Order = new Order(items);
    it('should be able to getTotal()', () => {

        expect(order.getTotal).toBeTruthy();

    })
     it('should be able to getTotal() correctly', () => {

        expect(order.getTotal()).toBe(10 + 20*2 + 50*3)

    })
});

