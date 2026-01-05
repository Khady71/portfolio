import { Component } from '@angular/core';
import { TechnoBadge } from '../../../shared/techno-badge/techno-badge';

@Component({
  selector: 'app-skills',
  imports: [TechnoBadge],
  templateUrl: './skill-component.html',
  styleUrls: ['./skill-component.css']
})
export class SkillComponent {
  
  hardSkills = {
    languages: [
      { title: 'Java' },
      { title: 'Python' },
      { title: 'C' },
      { title: 'JavaScript' },
      { title: 'MySQL' },
      { title: 'Prolog' },
      { title: 'Delphi' }
    ],
    frontend: [
      { title: 'Next.js' },
      { title: 'Angular' },
      { title: 'React' },
      { title: 'Tailwind CSS' },
      { title: 'StreamLit' }
    ],
    backend: [
      { title: 'Spring Boot' },
      { title: 'Java EE' },
      { title: 'FastAPI' }
    ],
    mobile: [
      { title: 'Flutter' },
      { title: 'Kotlin' },
      { title: 'Jetpack Compose' }
    ],
    technologies: [
      { title: 'Git' },
      { title: 'Docker' },
      { title: 'Kafka' }
    ]
  };

  softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 90 }
  ];
}