import { Component } from "@angular/core";
import { NavbarRoutes } from "../../enums/navbar-routes.enum";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
    public NavbarRoutes = NavbarRoutes;
}
