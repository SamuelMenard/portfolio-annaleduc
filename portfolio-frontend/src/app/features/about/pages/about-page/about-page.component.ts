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
                "Je suis très douée à utiliser le logiciel de dessin Autocad. Effectivement, avec maintenant plusieurs années d'expérience avec ce logiciel, je suis en mesure de réaliser des dessins complexes avec un rendu professionnel.",
            imageUrl: "../../../../../assets/projects/projet-1/plan-autocad.webp",
            imageTextSectionType: ImageTextSectionType.IMAGE_LEFT,
            imageHeightVw: 30,
            buttonText: "Mon portfolio",
            buttonRoute: `/${NavbarRoutes.Portfolio}`
        },
        {
            sectionTitle: "Rendu 3D avec Sketchup",
            sectionDescription:
                "Avec mes profondes connaissances du logiciel ainsi que de certaines de ses librairies telle que Lightup, je suis en mesure de créer des espaces 3D très réalistes qui permettent aux clients de bien visualiser leur espace d'aménagement avant même le début des travaux.",
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
