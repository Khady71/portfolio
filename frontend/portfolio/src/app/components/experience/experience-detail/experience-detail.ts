import { Component, Input } from '@angular/core';
import { Experience } from '../../../services/experience.service';
import { TechnoBadge } from '../../../shared/techno-badge/techno-badge';

@Component({
  selector: 'app-experience-detail',
  imports: [ TechnoBadge],
  templateUrl: './experience-detail.html',
  styleUrl: './experience-detail.css',
})
export class ExperienceDetail {
  @Input() experience!:Experience;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

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



  getDescriptionPoints(): string[] {
    if (!this.experience?.description) {
      return [];
    }
    
  
    return this.experience.description
      .split('.')
      .map((point: string) => point.trim())
      .filter((point: string) => point.length > 0);
  }

}
