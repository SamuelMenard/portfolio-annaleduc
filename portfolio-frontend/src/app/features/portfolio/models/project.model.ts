import { ProjectImage } from "./project-image.model";

export interface Project {
    id: string;
    title: string;
    description: string;
    coverImageUrl: string;
    projectImages: ProjectImage[];
}
