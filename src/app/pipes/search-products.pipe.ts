import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform(arr: any[], prop: string, value: string , method: Method): any {
    if (arr) {
      if (!value) {
        return arr
      } else {
        console.log(value)
        return arr.filter(obj => obj.title.toLowerCase().includes(value.toLowerCase()))

        // return arr.filter(obj => this.filter(obj[prop],value, method))
      }
    } else {
      return []
    }
  }

  }

    type Method ="includes" | "equal" | "not-equal"
