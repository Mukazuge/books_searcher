import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'http://openlibrary.org/';

  constructor(private http: HttpClient) { }

  searchList(param: string) {
    param = param.trim().replace(/\s/g, '+');

    return this.http.get(this.baseUrl + 'search.json?q=' + param);
  }

  getBookDetails(isbn: string) {
    isbn = isbn.trim().replace(/[-\s]/g, '');
    return this.http.get(`${this.baseUrl}api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
  }
}
