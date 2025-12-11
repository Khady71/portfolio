import { Component, AfterViewInit } from '@angular/core';
import { Hero } from '../../shared/hero/hero';
import { Projects } from '../../features/projects/projects';
import { Education } from '../../features/education/education';
import { Experiences } from '../experiences/experiences';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Experiences, Education],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

    ngAfterViewInit() {
    // abonne-toi aux fragments (se déclenche après navigation vers /#fragment)
    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;

      // petit délai pour s'assurer que le DOM/les composants enfants sont rendus
      setTimeout(() => {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    });
  }

}
