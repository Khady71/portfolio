import { Routes } from '@angular/router';
import {Home} from './shared/home/home';



export const routes: Routes = [
  { path:'', 
    component:Home,
    data: { title: 'Accueil' }
  },
  { path:'blog', 
    loadComponent: () => import('./components/blog/blog')
    .then(m => m.Blog),

  },

  { path:'**', redirectTo: '', pathMatch: 'full' },
];