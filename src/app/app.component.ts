import { Component } from '@angular/core';

import { Order } from './order';
import { OrderItem } from './order-item';

import { OrderService } from "./order.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  order:Order
  
  constructor(orderService:OrderService  ){
    this.order = orderService.getAllOrder()[0];
    
  }
  
}
