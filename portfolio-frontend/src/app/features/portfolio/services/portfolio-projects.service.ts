import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";

@Injectable({
    providedIn: "root"
})
export class PortfolioProjectsService {
    private projects: Project[] = [
        {
            id: "projet1",
            title: "Projet 1",
            description: "Description 1",
            coverImageUrl: "../../../../../assets/projects/projet-1/planche-materiaux.webp",
            projectImages: [
                { url: "../../../../../assets/projects/projet-1/planche-materiaux.webp" },
                { url: "../../../../../assets/projects/projet-1/plan-autocad.webp" },
                { url: "../../../../../assets/projects/projet-1/croquis-1.webp" },
                { url: "../../../../../assets/projects/projet-1/croquis-1.webp" }
            ],
            likes: 0
        },
        {
            id: "projet2",
            title: "Projet 2",
            description: "Description 2",
            coverImageUrl: "../../../../../assets/projects/projet-2/plan-autocad.webp",
            projectImages: [
                { url: "../../../../../assets/projects/projet-2/plan-autocad.webp" },
                { url: "../../../../../assets/projects/projet-2/elevation-autocad.webp" }
            ],
            likes: 0
        },
        {
            id: "projet3",
            title: "Projet 3",
            description: "Description 3",
            coverImageUrl: "../../../../../assets/projects/projet-3/sketchup-reception.webp",
            projectImages: [
                { url: "../../../../../assets/projects/projet-3/sketchup-reception.webp" },
                { url: "../../../../../assets/projects/projet-3/sketchup-conference.webp" },
                { url: "../../../../../assets/projects/projet-3/planche-materieux.webp" }
            ],
            likes: 0
        },
        {
            id: "projet4",
            title: "Projet 4",
            description: "Description 4",
            coverImageUrl: "../../../../../assets/projects/projet-4/sketchup-general.webp",
            projectImages: [
                { url: "../../../../../assets/projects/projet-4/sketchup-general.webp" },
                { url: "../../../../../assets/projects/projet-4/sketchup-2.webp" },
                { url: "../../../../../assets/projects/projet-4/planche-materiaux.webp" },
                { url: "../../../../../assets/projects/projet-4/elevation.webp" },
                { url: "../../../../../assets/projects/projet-4/coupe.webp" }
            ],
            likes: 0
        },
        {
            id: "projet5",
            title: "Projet 5",
            description: "Description 5",
            coverImageUrl: "../../../../../assets/projects/projet-5/Pr1_Photo5_LeducAnnabel-5.webp",
            projectImages: [
                { url: "../../../../../assets/projects/projet-5/Pr1_Photo5_LeducAnnabel-5.webp" },
                { url: "../../../../../assets/projects/projet-5/Pr1_Photo4_LeducAnnabel-4.webp" },
                { url: "../../../../../assets/projects/projet-5/Pr1_Photo3_LeducAnnabel-3.webp" },
                { url: "../../../../../assets/projects/projet-5/Pr1_Photo2_LeducAnnabel-2.webp" },
                { url: "../../../../../assets/projects/projet-5/Pr1_Photo1_LeducAnnabel.webp" }
            ],
            likes: 0
        },
        {
            id: "projet6",
            title: "Projet 6",
            description: "Description 6",
            coverImageUrl: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp",
            projectImages: [
                { url: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp" },
                { url: "../../../../../assets/projects/projet-6/tendance-retro-1.webp" },
                { url: "../../../../../assets/projects/projet-6/elevation-sketchup.webp" },
                { url: "../../../../../assets/projects/projet-6/elevation-japandi.webp" }
            ],
            likes: 0
        }
    ];

    constructor() {}

    public getAllProjects(): Project[] {
        return this.projects;
    }

    public getProjectById(id: string): Project | undefined {
        return this.projects.find((project) => project.id === id);
    }
}
