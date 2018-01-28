import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 public transform(value: any, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => {
      let itemValue = item[key];
      if (itemValue !== null && typeof itemValue === 'object') {
        return Object.keys(itemValue).reduce((memo, _key) => {
            return memo || this.containsString(itemValue, _key, term);
        }, false);
      }
      return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])
    }));

  }

  containsString(item: string, key: string, term: string) {
    return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])
  }

}
