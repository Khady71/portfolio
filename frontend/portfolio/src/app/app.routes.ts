import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Projects} from './features/projects/projects';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import { Education } from './features/education/education';
import { Blog } from './features/blog/blog';
import { Experiences } from './pages/experiences/experiences';


export const routes: Routes = [
  { path:'', 
    component:Home,
    data: { title: 'Accueil' }
  },
  { path:'blog', 
    loadComponent: () => import('./features/blog/blog')
    .then(m => m.Blog),

  },
  //    { path:'projects', component:Projects},
  // { path:'education', component:Education},
  // { path:'experiences', component:Experiences},
  //   { path:'about', component:About},
  // { path:'contact', component:Contact},

  { path:'**', redirectTo: '', pathMatch: 'full' },
];
