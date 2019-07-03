import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('BookService', () => {
  let testService: BookService;
  let httpMock: HttpTestingController;
  const baseUrl = 'http://openlibrary.org/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        BookService
      ]
    });

    testService = TestBed.get(BookService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(testService).toBeTruthy();
  });

  it('should call searchList request', () => {
    testService.searchList('the upside of irrationality').subscribe();

    httpMock.expectOne(req => {
      return req.url === baseUrl + 'search.json?q=' + 'the+upside+of+irrationality';
    });
  });

  it('should call getBookDetails request', () => {
    const isbn = '123111345';

    testService.getBookDetails('123-111 345').subscribe();

    httpMock.expectOne(req => {
      return req.url === `${baseUrl}api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`;
    });
  });
});
