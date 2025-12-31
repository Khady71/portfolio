import { Component, inject } from '@angular/core';
import { ExperienceService, Experience } from '../../services/experience.service';
import { catchError, of } from 'rxjs';
import { ExperienceDetail } from './experience-detail/experience-detail';

@Component({
  selector: 'app-experiences',
  imports: [ExperienceDetail],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css',
})
export class Experiences {
  private experienceService = inject(ExperienceService);
  isLoading = true;
  error?: string;

  experiences: Experience[] = [];

  ngOnInit() {
      this.loadExperiences();
    }

loadExperiences(){
  this.isLoading = true;
  this.error = undefined;

  this.experienceService.getAllExperiences().pipe(
    catchError(error =>{
      this.error = 'Impossible de charger les experiences';
      this.isLoading = false;
      return of([]); //
    })
  ).subscribe({
    next: (experiences) => {
      this.experiences = experiences;
    }
  }
  )
}

}
