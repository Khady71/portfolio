import { Component, Input } from '@angular/core';
import { Education } from '../../../services/education.service';
import { TechnoBadge } from '../../../shared/techno-badge/techno-badge';

@Component({
  selector: 'app-education-detail',
  imports: [],
  templateUrl: './education-detail.html',
  styleUrl: './education-detail.css',
})
export class EducationDetail {
  @Input() education!:Education;

  private months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  formatMonthYear(dateString: string): string {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${month} ${year}`;
  }


}
