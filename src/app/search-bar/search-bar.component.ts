import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {of, Subject, Subscription, timer} from 'rxjs';
import {debounceTime, delay, distinctUntilChanged, map, mergeMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnDestroy {
  @Output() searchEmitter = new EventEmitter();
  keyUp = new Subject<KeyboardEvent>();
  searchText = '';
  subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = this.keyUp.pipe(
      map((event: any) => event.target.value),
      debounceTime(200),
      distinctUntilChanged(),
      mergeMap(search => of(search).pipe(
        delay(500),
      )),
    ).subscribe((search) => {
      if (window.location.pathname === '/details') {
        this.router.navigate(['/']);
        timer(1000).subscribe(() => {
          this.searchEmitter.next({search});
        });
      } else {
        this.searchEmitter.next({search});
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
