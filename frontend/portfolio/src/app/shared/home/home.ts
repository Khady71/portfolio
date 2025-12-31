import { Component, AfterViewInit } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Projects } from '../../components/projects/projects';
import { Educations } from '../../components/education/educations';
import { Experiences } from '../../components/experience/experiences';
import { ActivatedRoute } from '@angular/router';
import { SkillComponent } from '../../components/skill/skill-component/skill-component';


@Component({
  selector: 'app-home',
   standalone: true,
  imports: [Hero, Projects, Experiences, Educations, SkillComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

    ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;

      setTimeout(() => {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    });
  }

}
