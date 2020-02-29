import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngForByInteger'
})
export class NgForByIntegerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
