import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

 public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => {
      let itemValue = item[key];
      if (itemValue !== null && typeof itemValue === 'object') {
        return Object.keys(itemValue).reduce((memo, _key) => {
            return memo || this.check(itemValue, _key, term);
        }, false);
      }
      return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])
    }));

  }

  check(item: string, key: string, term: string) {
    return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])
  }

}
