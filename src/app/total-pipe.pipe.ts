import { Pipe, PipeTransform } from '@angular/core';
import { OrderItem } from './order-item'

@Pipe({
  name: 'totalPipe'
})
export class TotalPipePipe implements PipeTransform {

  transform(items: Array<OrderItem>, args?: any): any {
    
    return 
  }

}
