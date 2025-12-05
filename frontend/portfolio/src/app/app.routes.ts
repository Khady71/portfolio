import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Projects} from './features/projects/projects';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [
  { path:'', component:Home},
  { path:'projects', component:Projects},
  { path:'projects/:id', component:Projects},
  { path:'about', component:About},
  { path:'projects/:id', component:Projects},
  { path:'contact', component:Contact},
  { path:'**', redirectTo: '', pathMatch: 'full' },
];
