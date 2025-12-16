import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-techno-badge',
  imports: [],
  templateUrl: './techno-badge.html',
  styleUrl: './techno-badge.css',
})
export class TechnoBadge {
  @Input() name: string = '';

}
