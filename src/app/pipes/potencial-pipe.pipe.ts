import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'potencial',
  standalone: true
})

export class PotencialPipe implements PipeTransform {
  transform(value: number, arg: number): number {
    return Math.pow(value, arg);
  }
}
