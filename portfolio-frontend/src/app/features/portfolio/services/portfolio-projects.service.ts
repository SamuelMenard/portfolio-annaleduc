import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectsService {
  private projects: Project[] = [
    { id: 'projet1', title: 'Projet 1', description: 'Description 1', coverImageUrl: '' },
    { id: 'projet2', title: 'Projet 2', description: 'Description 2', coverImageUrl: '' },
    { id: 'projet3', title: 'Projet 3', description: 'Description 3', coverImageUrl: '' },
    { id: 'projet4', title: 'Projet 4', description: 'Description 4', coverImageUrl: '' },
    { id: 'projet5', title: 'Projet 5', description: 'Description 5', coverImageUrl: '' },
  ];

  constructor() { }

  public getAllProjects(): Project[] {
    return this.projects;
  }

  public getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
