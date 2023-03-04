import { Component } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { WindowScrollService } from './core/services/window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Annabel Leduc';

  private destroy = new Subject();
  private destroy$ = this.destroy.asObservable();

  constructor(private windowScrollService: WindowScrollService) { 
    fromEvent(window, 'scroll').pipe(takeUntil(this.destroy$))
			.subscribe(() => {
        this.windowScrollService.updateScrollY(window.pageYOffset);
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
  }
}
