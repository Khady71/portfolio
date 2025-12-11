import { Routes } from '@angular/router';
import {Home} from './pages/home/home';



export const routes: Routes = [
  { path:'', 
    component:Home,
    data: { title: 'Accueil' }
  },
  { path:'blog', 
    loadComponent: () => import('./features/blog/blog')
    .then(m => m.Blog),

  },

  { path:'**', redirectTo: '', pathMatch: 'full' },
];