import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NavbarRoutes } from "src/app/core/enums/navbar-routes.enum";
import { Project } from "../../models/project.model";

@Component({
    selector: "app-portfolio-project",
    templateUrl: "./portfolio-project.component.html",
    styleUrls: ["./portfolio-project.component.scss"]
})
export class PortfolioProjectComponent {
    @Input() project: Project = {
        id: "projet1",
        title: "Projet 1",
        description: "Description 1",
        coverImageUrl: "",
        projectImages: []
    };
    @Output() nextEventEmitter = new EventEmitter<void>();
    @Output() previousEventEmitter = new EventEmitter<void>();

    public NavbarRoutes = NavbarRoutes;

    public next(): void {
        this.nextEventEmitter.emit();
    }

    public previous(): void {
        this.previousEventEmitter.emit();
    }
}
