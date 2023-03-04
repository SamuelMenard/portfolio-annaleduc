import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { NavbarRoutes } from '../../enums/navbar-routes.enum';
import { WindowScrollService } from '../../services/window-scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private destroy = new Subject();
  private destroy$ = this.destroy.asObservable();

  public NavbarRoutes = NavbarRoutes;

  public solidBg = false;

  constructor(private windowScrollService: WindowScrollService) {}

  ngOnInit(): void {
    this.windowScrollService.scrollY$.pipe(takeUntil(this.destroy$)).subscribe((value: number) => {
      this.solidBg = value >= 50;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(null);
  }
  
}
