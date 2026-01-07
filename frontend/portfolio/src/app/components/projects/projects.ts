import { Component, OnInit, inject } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { ProjectDetail } from './project-detail/project-detail';
import { catchError, of } from 'rxjs';
import { LabProject } from './lab-projects/lab-project';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetail, LabProject],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private projectService = inject(ProjectService);
    

  projects: Project[] = [];
  mainProjects: Project[] = [];
  labProjects: Project[] = [];
  selectedProject?: Project;
  isLoading = true;
  error?: string;

    ngOnInit() {
      this.loadProjects();
    }

    loadProjects(){
      this.isLoading = true;
      this.error = undefined; 

      this.projectService.getAllProjectsWithSkills().pipe(
        catchError(error => {
          this.error = 'Impossible de charger les  projets';
          this.isLoading = false;
          return of([]); // 
        })
      ).subscribe({
        next: (projects) => {
          this.projects = projects;
          this.separateProjectsByCategory(projects);
          this.sortProjectsByTitle();
            this.isLoading = false;
            
        }
      })
    }

    separateProjectsByCategory(projects: Project[]) { 
    this.mainProjects = [];
    this.labProjects = [];
    
    projects.forEach(project => {
      if (project.category === 'MAIN') {
        this.mainProjects.push(project);
      } else if (project.category === 'LAB') {
        this.labProjects.push(project);
      } else {
        this.labProjects.push(project);
      }
    });
}

  sortProjectsByTitle() {
    this.mainProjects.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
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




