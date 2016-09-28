
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Operator, Observable} from 'rxjs';


import { OrderService } from "../order.service"
import { Order } from "../order"

@Component({
  selector: 'app-receipt-selector',
  templateUrl: './receipt-selector.component.html',
  styleUrls: ['./receipt-selector.component.css']
})
export class ReceiptSelectorComponent implements OnInit {

  orders:Array<Order>
  // promiseOrder:Promise<Array<Order>>;

  observeOrders:Observable<Array<Order>>;

  //inject the service instance in constructor
  constructor(private orderService:OrderService  ) {
      this.orders = this.orderService.load();
      //use call back
      // orderService.getOrderFromURL(orders => {
      //   this.orders = orders;
      // });

      //use promise
      // this.promiseOrder = orderService.getOrderFromURL();

      //use Observable
      // this.observeOrders = orderService.getOrderFromURL();


  }

  loadFromURL() {
    this.orderService.loadDataFromURL().then(orders => {
      this.orders = orders;
    });
  }

   //init when done created a component
  ngOnInit() {
    // use promise
    //  this.promiseOrder.then(orders =>{
    //  })

    // use Observable
    // this.observeOrders.subscribe(data => {
      // this.orders = data;
    // })

  }

  onSomething() {
    //use promise
    // this.promiseOrder.then(orders => {
    //   console.log('do other stuff');
    // })
  }

 removeItem(index:number){
    this.orders.splice(index, 1)
  }
}
