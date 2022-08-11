import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollProgressBarService {
  scrollProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  scrollProgress$: Observable<number> = this.scrollProgress.asObservable();

  constructor() {
    this.scrollProgress.subscribe((value: number) => {
      return this.scrollProgress;
    });
  }

  setScrollProgress(v: any) {
    // console.log('Scroll %', v);
    this.scrollProgress.next(v);
  }
}
