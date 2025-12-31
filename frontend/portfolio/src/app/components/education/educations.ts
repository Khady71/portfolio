import { Component, inject } from '@angular/core';
import { catchError, of } from 'rxjs';
import { EducationDetail } from './education-detail/education-detail';
import { Education, EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  imports: [EducationDetail],
  templateUrl: './educations.html',
  styleUrl: './educations.css',
})
export class Educations {
  private educationService = inject(EducationService);
  isLoading = true;
  error?: string;

  educations: Education[] = [];

  ngOnInit() {
      this.loadEducations();
    }

loadEducations(){
  this.isLoading = true;
  this.error = undefined;

  this.educationService.getAllEducation().pipe(
    catchError(error =>{
      this.error = 'Impossible de charger educations';
      this.isLoading = false;
      return of([]); //
    })
  ).subscribe({
    next: (educations) => {
      this.educations = educations;
    }
  }
  )
}
}
