import { Component, OnInit, inject } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private projectService = inject(ProjectService);
    
    projects: Project[] = [];
    selectedProject?: Project;
    isLoading = true;
    error?: string;

    ngOnInit() {
      this.loadProjects();
    }

    loadProjects(){
      this.isLoading = true;
      this.error = undefined; 

      this.projectService.getAllprojects().pipe(
        catchError(error => {
          this.error = 'Impossible de charger les projets';
          this.isLoading = false;
          return of([]); // Retourne un tableau vide en cas d'erreur
        })
      ).subscribe({
        next: (projects) => {
          this.projects = projects;
          this.isLoading = false;
        }
      })
    }

    loadProjectBySlug(slug: string){
      this.projectService.getProjectBySlug(slug).subscribe({
        next: (project) => {
          this.selectedProject = project
        },
         error: (error) => {
        console.error('Erreur:', error);
        this.error = 'Projet non trouvé';
      }
      })

    }



}
