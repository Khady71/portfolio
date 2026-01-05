import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   name = 'Khady';
  tagline = 'Ingénieure FullStack passionnée par la création d\'applications modernes et performantes.';
  location = 'Paris, France';
  
  currentYear = new Date().getFullYear();
  
  socialLinks = {
    github: 'https://github.com/Khady71',
    linkedin: 'https://linkedin.com/in/khady-gaye',
    twitter: 'https://x.com/XouryG',
    email: 'kgaye809@gmail.com'
  };

}
