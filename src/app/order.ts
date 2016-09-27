import { OrderItem } from "./order-item"

export class Order {
    id:number
    create_time:Date;
    items:Array<OrderItem>

    constructor(items:Array<OrderItem>, date?:Date){
        let now = new Date()
        this.id = now.getTime()
        if(!date)
            this.create_time = now
        else
            this.create_time = date;
        this.items = items
    }

}

