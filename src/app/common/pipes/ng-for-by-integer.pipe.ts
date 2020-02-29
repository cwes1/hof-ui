import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngForByInteger'
})
export class NgForByIntegerPipe implements PipeTransform {

  transform(value: any): any {
    return (new Array(value)).fill(1);
  }

}
