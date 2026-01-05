import { Component,Input } from '@angular/core';
import { SkillBadge } from '../../../shared/skill-badge/skill-badge';
import { Project, Skill } from '../../../services/project.service';
import { TechnoBadge } from '../../../shared/techno-badge/techno-badge';

@Component({
  selector: 'app-project-detail',
  imports: [TechnoBadge],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail {
  @Input() project!:Project;

  
  skills: Skill[] = [];

  ngOnInit() {
    this.skills = this.project?.skills || [];
  }

   

}
