import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ProjectImage } from "../../models/project-image.model";
import { Project } from "../../models/project.model";
import { PortfolioProjectsService } from "../../services/portfolio-projects.service";

@Component({
    selector: "app-portfolio-project-page",
    templateUrl: "./portfolio-project-page.component.html",
    styleUrls: ["./portfolio-project-page.component.scss"]
})
export class PortfolioProjectPageComponent implements OnInit, OnDestroy {
    public project?: Project;
    public params$: Subscription | undefined;
    public selectedProjectImage?: ProjectImage;
    public likesPost: boolean = false;

    constructor(private portfolioProjectsService: PortfolioProjectsService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.params$ = this.route.paramMap.subscribe((params) => {
            const id = params.get("id");
            if (id) {
                this.project = this.portfolioProjectsService.getProjectById(id);
            }
        });
    }

    ngOnDestroy(): void {
        if (this.params$) {
            this.params$.unsubscribe();
        }
    }

    public onImageClicked(projectImage: ProjectImage): void {
        this.selectedProjectImage = projectImage;
    }

    public likeProject(): void {
        if (this.project && !this.likesPost) {
            this.project.likes++;
            this.likesPost = true;
        }
    }

    public dislikeProject(): void {
        if (this.project && this.likesPost) {
            this.project.likes--;
            this.likesPost = false;
        }
    }
}
