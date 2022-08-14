import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  toggleDarkMode(): void {
    this.darkMode$.next(!this.darkMode$.getValue());
  }
}
