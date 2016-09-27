/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TotalPipePipe } from './total-pipe.pipe';
import { OrderItem } from "./order-item"


describe('Pipe: TotalPipe', () => {
  let pipe = new TotalPipePipe();
  

  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });

  it('should get total', () => {
    let items:Array<OrderItem> = [
    new OrderItem('Samsung Note7',1,2490),
    new OrderItem('MacBook',1,4900),
    new OrderItem('Ipad Mini',1, 1450)
    ]
    expect(pipe.transform(items)).toBe(8840);
  });

    it('should get total with quantity > 1', () => {
    let items:Array<OrderItem> = [ 
      new OrderItem('Samsung Note7',1,2490),
      new OrderItem('MacBook',1,4900),
      new OrderItem('Ipad Mini',2,1450)
      ]
    expect(pipe.transform(items)).toBe(10290);
  });

  it('should get total with quantity = 0', () => {
    let items:Array<OrderItem> = [
      new OrderItem('Samsung Note7',0,2490),
      new OrderItem('MacBook',1,4900),
      new OrderItem('Ipad Mini',1,1450)
      ]
    expect(pipe.transform(items)).toBe(6350);
  });

  it('should be 0 when items are empty', () => {
    expect(pipe.transform([])).toBe(0);
  })

});
