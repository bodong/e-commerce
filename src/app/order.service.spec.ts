/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderService } from './order.service';
import { Order } from "./order"

describe('Service: Order', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
  });

  it('should ...', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('should getAllOrder() return Array of all Order', inject([OrderService], (service: OrderService) => {
    //expect(service).toBeTruthy();
    let result = service.getAllOrder();
    expect(result).toBeTruthy();
    
    //expect(result.length).toBeGreaterThan(0)
  }));

  it(' getAllOrder() should have more than 2 order', inject([OrderService], (service: OrderService) => {
    let result = service.getAllOrder();
    expect(result.length).toBeGreaterThan(2)
  }));

  /* it('getOrder(id) should have same member in  getAllOrder()', inject([OrderService], (service: OrderService) => {
    let orders:Array<Order> = service.getAllOrder();
    for(let i = 0; i < orders.length; i++){
      let currect_order = orders[i]
      let sample_id = orders[i].id
      let sample_order = service.getOrder(sample_id)
      console.log(currect_order.id)
      console.log(sample_order)
      expect(sample_order.create_time.getTime()).toBe(currect_order.create_time.getTime())
      expect(sample_order.getTotal()).toBe(currect_order.getTotal())
    }*/
    


  }));

});
