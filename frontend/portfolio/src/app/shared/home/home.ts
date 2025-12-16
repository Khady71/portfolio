import { Component, AfterViewInit } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Projects } from '../../components/projects/projects';
import { Education } from '../../components/education/education';
import { Experience } from '../../components/experience/experience';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
   standalone: true,
  imports: [Hero, Projects, Experience, Education],
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
