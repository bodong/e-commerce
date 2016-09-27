export class OrderItem {
    item:string
    quantity:number
    unit_price:number
    
    constructor(item:string,quatity:number,unit_price:number){
        this.item = item
        this.quantity = quatity
        this.unit_price = unit_price
    }
}
