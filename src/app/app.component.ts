import { Component } from '@angular/core';
import {BookService} from './book.service';
import {SiblingCommunicatorService} from './sibling-communicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private bookService: BookService, private siblingCommunicatorService: SiblingCommunicatorService) {}

  searchBooks(search: any) {
    this.siblingCommunicatorService.sendList({isLoading: true});
    this.bookService.searchList(search.search).subscribe((res: any) => {
      this.siblingCommunicatorService.sendList({list: res.docs, isLoading: false});
    });
  }
}
