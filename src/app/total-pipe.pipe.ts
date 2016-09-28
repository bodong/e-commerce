import { Pipe, PipeTransform } from '@angular/core';
import { OrderItem } from './order-item'

@Pipe({
  name: 'totalPipe'
})
export class TotalPipePipe implements PipeTransform {

  transform(items: Array<OrderItem>, args?: any): any {
    let sum = 0
    items.forEach(item =>{
      sum += item.quantity * item.unit_price
    })
    return sum
  }

}
