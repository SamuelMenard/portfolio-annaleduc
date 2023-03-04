import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {
  private scrollY = new BehaviorSubject(0);
  public scrollY$ = this.scrollY.asObservable();

  updateScrollY(value: number): void {
    this.scrollY.next(value);
  }
}
