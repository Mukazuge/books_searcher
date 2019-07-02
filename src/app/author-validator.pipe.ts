import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorValidator'
})
export class AuthorValidatorPipe implements PipeTransform {

  transform(value: any): any {
    if (Array.isArray(value) && value.length > 0) {
      return value[0];
    }

    return 'Undefined';
  }

}
