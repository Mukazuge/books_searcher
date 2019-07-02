import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  details: any;
  infoUrl: string;
  thumbnailUrl: string;
  isbn: string;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((query: any) => {
      this.isbn = query.isbn;
      // weird way to call an object lol, but that's what the API returns so...
      const objName = 'ISBN:' + query.isbn;
      this.bookService.getBookDetails(query.isbn).subscribe((res: any) => {
        const data = res[objName];
        this.details = data;
        this.infoUrl = data.url;
        this.thumbnailUrl = data && data.cover && data.cover.large;
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
