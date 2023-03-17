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
            coverImageUrl: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp"
        },
        {
            id: "projet2",
            title: "Projet 2",
            description: "Description 2",
            coverImageUrl: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp"
        },
        {
            id: "projet3",
            title: "Projet 3",
            description: "Description 3",
            coverImageUrl: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp"
        },
        {
            id: "projet4",
            title: "Projet 4",
            description: "Description 4",
            coverImageUrl: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp"
        },
        {
            id: "projet5",
            title: "Projet 5",
            description: "Description 5",
            coverImageUrl: "../../../../../assets/projects/projet-6/vue-3d-japandi.webp"
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
