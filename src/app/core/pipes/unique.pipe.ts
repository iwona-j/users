import {  Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(function (val, index, self) { 
      return self.indexOf(val) === index;
    });
  }

}
