import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxPipe'
})
export class TaxPipePipe implements PipeTransform {

  transform(num:number, tax?: number): any {
    let def_tax;
    typeof(tax) == 'number' ?def_tax=tax:def_tax=7;
    return  def_tax * num / 100
  }

}
