import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { fromEvent, Subject, takeUntil } from "rxjs";
import { NavbarRoutes } from "./core/enums/navbar-routes.enum";
import { WindowScrollService } from "./core/services/window-scroll.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "Annabel Leduc";
    public NavbarRoutes = NavbarRoutes;

    private destroy = new Subject();
    private destroy$ = this.destroy.asObservable();

    constructor(private windowScrollService: WindowScrollService, public router: Router) {
        fromEvent(window, "scroll")
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.windowScrollService.updateScrollY(window.pageYOffset);
            });
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.destroy.next(null);
    }
}
