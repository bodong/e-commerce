import { OrderItem } from "./order-item"

export class Order {
    id:string // change id type to string
    create_time:Date;
    items:Array<OrderItem>
    
    constructor(items:Array<OrderItem>, date?:Date){
        let now = new Date()
        this.id = now.getTime() + "-" + Math.floor(Math.random()*100)
        if(!date)
            this.create_time = now
        else
            this.create_time = date;
        this.items = items
    }

    getTotal():number{
        var sum =0;
        this.items.forEach(item=>{
            sum += item.quantity * item.unit_price

        });
        return sum;
    }

}

