import { Component } from '@angular/core';

import { Order } from './order';
import { OrderItem } from './order-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  order:Order
  
  constructor(){
    this.order = new Order([
      new OrderItem('Samsung Note7',1,2490),
      new OrderItem('MacBook',1,4900),
      new OrderItem('Ipad Mini',2,1450)
    ], new Date("2015-12-04"));
    
  }
  
}
