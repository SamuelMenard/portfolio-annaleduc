import { animate, AnimationBuilder, AnimationFactory, style } from "@angular/animations";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Project } from "../../models/project.model";
import { PortfolioProjectsService } from "../../services/portfolio-projects.service";

@Component({
    selector: "app-portfolio-page",
    templateUrl: "./portfolio-page.component.html",
    styleUrls: ["./portfolio-page.component.scss"]
})
export class PortfolioPageComponent {
    @ViewChild("projectCarousel") private projectCarousel?: ElementRef;

    public projects: Project[];

    private readonly timing = "400ms ease-in-out";
    private currentProjectIndex = 0;

    constructor(private portfolioProjectsService: PortfolioProjectsService, private builder: AnimationBuilder) {
        this.projects = this.portfolioProjectsService.getAllProjects();
    }

    public nextProject(): void {
        if (this.currentProjectIndex + 1 === this.projects.length) return;

        this.currentProjectIndex++;
        const offset = this.currentProjectIndex * 100;
        this.translateProjectCarousel(offset);
    }

    public previousProject(): void {
        if (this.currentProjectIndex - 1 < 0) return;

        this.currentProjectIndex--;
        const offset = this.currentProjectIndex * 100;
        this.translateProjectCarousel(offset);
    }

    private translateProjectCarousel(offset: number): void {
        const myAnimation: AnimationFactory = this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}vw)` }))
        ]);

        if (this.projectCarousel) {
            const player = myAnimation.create(this.projectCarousel.nativeElement);
            player.play();
        }
    }
}
