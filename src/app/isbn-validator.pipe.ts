import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbnValidator'
})
export class IsbnValidatorPipe implements PipeTransform {

  transform(value: any) {
    value = value && value.filter((books: any) => books.isbn);

    return value;
  }
}
