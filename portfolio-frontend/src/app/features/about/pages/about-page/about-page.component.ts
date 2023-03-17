import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NavbarRoutes } from "src/app/core/enums/navbar-routes.enum";
import { ImageTextSectionType } from "src/app/shared/enums/image-text-section-type.enum";
import { ImageTextSectionContent } from "src/app/shared/models/image-text-section-content.model";

@Component({
    selector: "app-about-page",
    templateUrl: "./about-page.component.html",
    styleUrls: ["./about-page.component.scss"]
})
export class AboutPageComponent {
    @ViewChild("academicSection") public academicSection?: ElementRef;

    public skillsContents: ImageTextSectionContent[] = [
        {
            sectionTitle: "Dessin technique avec Autocad",
            sectionDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            imageUrl: "../../../../../assets/projects/projet-1/plan-autocad.webp",
            imageTextSectionType: ImageTextSectionType.IMAGE_LEFT,
            imageHeightVw: 30,
            buttonText: "Mon portfolio",
            buttonRoute: `/${NavbarRoutes.Portfolio}`
        },
        {
            sectionTitle: "Rendu 3D avec Sketchup",
            sectionDescription:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            imageUrl: "../../../../../assets/global/sketchup.webp",
            imageTextSectionType: ImageTextSectionType.IMAGE_RIGTH,
            imageHeightVw: 30,
            buttonText: "Mon portfolio",
            buttonRoute: `/${NavbarRoutes.Portfolio}`
        }
    ];

    constructor(private router: Router) {}

    public onLearnMoreButtonClicked(): void {
        if (this.academicSection) {
            this.academicSection?.nativeElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
        }
    }

    public onImageTextSectionButtonClicked(route: string): void {
        this.router.navigateByUrl(route);
    }
}
