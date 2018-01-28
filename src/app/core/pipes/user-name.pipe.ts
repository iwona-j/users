import { Pipe, PipeTransform } from '@angular/core';
import { Name } from '../../users/shared/name.model';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: Name): string {
    return value.first + ' ' + value.last;
  }

}
