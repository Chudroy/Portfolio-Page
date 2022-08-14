import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class scrollProgressBarService {
  scrollProgress$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  setscrollProgress(v: any) {
    // console.log('Scroll %', v);
    this.scrollProgress$.next(v);
  }
}
