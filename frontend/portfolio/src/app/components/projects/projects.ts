import { Component, OnInit, inject } from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { ProjectDetail } from './project-detail/project-detail';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectDetail],
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
          console.log("Projecrsrecus", projects)
          this.separateProjectsByCategory(projects);
            this.isLoading = false;
            console.log('main projects',this.mainProjects);
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

  //   mainProjects = [
  //   {
  //     title: 'RocketSaaS',
  //     description: 'Plateforme SaaS complète avec gestion utilisateurs, paiements et dashboard analytics',
  //     skills: [
  //       { name: 'Java', iconUrl: 'https://icongr.am/devicon/java-original.svg?size=128' },
  //       { name: 'Spring Boot', iconUrl: 'https://icongr.am/devicon/spring-original.svg?size=128' },
  //       { name: 'Angular', iconUrl: 'https://icongr.am/devicon/angularjs-original.svg?size=128' },
  //       { name: 'PostgreSQL', iconUrl: 'https://icongr.am/devicon/postgresql-original.svg?size=128' }
  //     ],
  //     githubUrl: 'https://github.com/username/rocketsaas',
  //     demoUrl: 'https://rocketsaas.demo.com'
  //   },
  //   {
  //     title: 'Betpa E-commerce',
  //     description: 'Site e-commerce moderne avec panier, paiement et gestion des commandes',
  //     skills: [
  //       { name: 'Angular', iconUrl: 'https://icongr.am/devicon/angularjs-original.svg?size=128' },
  //       { name: 'Spring Boot', iconUrl: 'https://icongr.am/devicon/spring-original.svg?size=128' },
  //       { name: 'Stripe', iconUrl: 'https://icongr.am/simple/stripe.svg?size=128&colored=true' },
  //       { name: 'PostgreSQL', iconUrl: 'https://icongr.am/devicon/postgresql-original.svg?size=128' }
  //     ],
  //     githubUrl: 'https://github.com/username/betpa',
  //     demoUrl: 'https://betpa.demo.com'
  //   },
  //   {
  //     title: 'Portfolio Website',
  //     description: 'Site portfolio personnel avec animations et design moderne',
  //     skills: [
  //       { name: 'Angular', iconUrl: 'https://icongr.am/devicon/angularjs-original.svg?size=128' },
  //       { name: 'Spring Boot', iconUrl: 'https://icongr.am/devicon/spring-original.svg?size=128' },
  //       { name: 'Tailwind CSS', iconUrl: 'https://icongr.am/devicon/tailwindcss-plain.svg?size=128' }
  //     ],
  //     githubUrl: 'https://github.com/username/portfolio'
  //   }
  // ];
}




