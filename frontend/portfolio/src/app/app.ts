import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './shared/header/header';
import {Footer} from './shared/footer/footer';
import {Hero} from './shared/hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Hero],
  templateUrl:'./app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-final');
}
