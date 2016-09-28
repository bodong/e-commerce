import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Order } from '../order';
import { OrderItem } from '../order-item';
import { OrderService } from "../order.service"


@Component({
  selector: 'app-receipt-editor',
  templateUrl: './receipt-editor.component.html',
  styleUrls: ['./receipt-editor.component.css']
})
export class ReceiptEditorComponent implements OnInit {

  
  order:Order
  isNew:boolean;
  formDate:string;
  constructor(private orderService:OrderService, private router:Router, private route:ActivatedRoute ) { }
  ngOnInit() {
    
    this.route.params.forEach((params:Params)=>{
      if(params['id'] == 'new') {
         this.order = new Order([]);
         this.isNew = true; 
      } else {
         this.order = this.orderService.getOrder(params['id'] );
         this.isNew = false; 
      }

    })

    this.formDate = this.order.create_time.toISOString().substring(0,10);
    
  }
  
  save():boolean {
    if(!this.validate()) {
      return false;
    }

    this.order.create_time = new Date(this.formDate);
    this.orderService.updateOrder(this.order);
    return true;
  }


  //for save order 
  onSave(){
    if(!this.save()) {
      alert("cannot be saved");
    } else {
      alert("you are good to save this!");
      this.router.navigate(["home"])
    }
    // if (!this.validate())
    //   return false
      
    // if (this.isNew)
    //   this.orderService.createOrder(this.order)
    // else
    //   this.orderService.updateOrder(this.order)
  
    // return true
  }

   validate(){
    //check form date
    if (this.formDate == "" )
      return false
    //check order.items

    let result = true;
    if (this.order.items.length == 0)
      result = false
    this.order.items.forEach((item,index,arr)=>{
      if (item.item == "")
        result = false
    })
    
    return result
 }

  // for add orderItem
  addItem(){
    this.order.items.push( new OrderItem('', 1, 0))
  }

  removeItem(index:number){
    this.order.items.splice(index, 1)
  }

}
