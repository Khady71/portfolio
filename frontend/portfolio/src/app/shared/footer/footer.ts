import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   name = 'Votre Nom';
  tagline = 'Développeur FullStack passionné par la création d\'applications web modernes et performantes.';
  location = 'Paris, France';
  
  currentYear = new Date().getFullYear();
  
  socialLinks = {
    github: 'https://github.com/votre-username',
    linkedin: 'https://linkedin.com/in/votre-profil',
    twitter: 'https://twitter.com/votre-username',
    email: 'votre.email@example.com'
  };

}
