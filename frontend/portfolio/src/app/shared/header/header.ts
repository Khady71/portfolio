import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone : true,
    imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

   mobileMenuOpen = false;


   constructor(private router: Router) {}

     async goToSection(sectionId: string) {
    // si on est déjà sur la page d'accueil -> scroller directement
    // router.url contient l'url actuelle (ex: '/blog' ou '/')
    if (this.router.url === '/' || this.router.url.startsWith('/#') || this.router.url.startsWith('/?')) {
      this.scrollTo(sectionId);
      this.closeMobileMenu();
      return;
    }

    // sinon naviguer vers / avec fragment (ex: /#projects)
    // la HomeComponent va écouter le fragment et scroller quand la route sera chargée
    await this.router.navigate(['/'], { fragment: sectionId });
    this.closeMobileMenu();
  }

  scrollTo(sectionId: string){
    const el = document.getElementById(sectionId);
    if(!el) return;

    el.scrollIntoView({ behavior: 'smooth', block:'start'})

  }

  toggleMobileMenu() { this.mobileMenuOpen = !this.mobileMenuOpen; }
  closeMobileMenu() { this.mobileMenuOpen = false; }
  mobileNavigate(sectionId: string) {
    this.scrollTo(sectionId);
    this.closeMobileMenu();
  }

}
