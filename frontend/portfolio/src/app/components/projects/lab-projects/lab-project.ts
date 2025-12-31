import { Component, Input } from '@angular/core';
import { Project, Skill } from '../../../services/project.service';

@Component({
  selector: 'app-lab-project',
  imports: [],
  templateUrl: './lab-project.html',
  styleUrl: './lab-project.css',
})
export class LabProject {
  @Input() labProject!:Project;

    
  

}
