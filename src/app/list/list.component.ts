import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {SiblingCommunicatorService} from '../sibling-communicator.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnDestroy {
  destroy$ = new Subject();
  list = null;
  isLoading = false;
  searchCompleted = false;
  search = '';

  constructor(private siblingCommunicatorService: SiblingCommunicatorService, private router: Router) { }

  ngAfterViewInit() {
    this.siblingCommunicatorService.listSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.list = res.data;
        this.isLoading = res.isLoading;
        this.searchCompleted = !res.isLoading && res.search;
        this.search = res.search;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBookSelection(book: any) {
    this.router.navigate(['/details'], {
      queryParams: {
        isbn: book.isbn[0]
      }
    });
  }

}
