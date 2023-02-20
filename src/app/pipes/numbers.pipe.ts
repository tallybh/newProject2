import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {

  transform(value: number): string {
    const numbers = ["One","Two", "Three","Four", "Five", "Six", "Seven","Eight", "Nine", "Ten"];
    return numbers[value-1];
  }

}
