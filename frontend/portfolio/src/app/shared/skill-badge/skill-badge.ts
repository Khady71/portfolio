import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-badge',
  imports: [],
  templateUrl: './skill-badge.html',
  styleUrl: './skill-badge.css',
})
export class SkillBadge {
  @Input() iconUrl?: string = '';
  @Input() name: string = '';


}
