import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customObservable: Observable<number> = Observable.create(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 2) {
            observer.complete();
          }
          if (count > 3) {
            observer.error(new Error('Count is greater than 3!'));
          }
          count++;
        }, 1000);
      }
    );

    this.subscription = customObservable
      .pipe(
        map((data: number) => {
          return 'Round ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error: Error) => {
          alert(error.message);
          console.log(error);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
