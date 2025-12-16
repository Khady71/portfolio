import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { SkillBadge } from '../skill-badge/skill-badge';
import { Skill } from '../../services/project.service';

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  bio?: string;
  jobTitle?: string;
  location?: string;
  urlProfile?: string;
  socials?: Record<string, string>;
  createdAt?: string;
  updatedAt?: string;
}





@Component({
  selector: 'app-hero',
  imports: [CommonModule, SkillBadge],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy{
  user?: User;

  displayText = '';
  fullText = 'Ingénieur Logiciel FullStack';
  currentIndex = 0;
  typingSpeed = 100;
  private typingInterval?: any;

  constructor(
    private route: ActivatedRoute,
    // private userService: UserService // Uncomment when service is available
  ) {}

   skills: Skill[] = [
    {
      name: 'Java',
      iconUrl: 'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor'
    },
    {
      name: 'Angular',
    iconUrl: 'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor'
    },
    {
      name: 'Python',
    iconUrl: 'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor'
    },
    {
      name: 'Flutter',
      iconUrl: 'https://cdn.simpleicons.org/flutter'
    },
    {
      name: 'Next.js',
      iconUrl: 'https://cdn.simpleicons.org/nextdotjs'
    },

  ];

  ngOnInit(): void {
    // Mock data for testing - replace with actual service call

    console.log('Skills array:', this.skills); // Add this line
    console.log('Skills length:', this.skills.length); // Add this line
  
    this.user = {
      id:'',
      email:'',
      firstName: 'Khady',
      jobTitle: 'Ingénieur Logiciel FullStack',
      urlProfile: 'assets/pp_1.jpg'
    };

    // Uncomment when service is available
    // this.userService.getUserInfo().subscribe({
    //   next: (data) => {
    //     this.user = data;
    //   },
    //   error: (err) => console.error('Error Getting User Info', err)
    // });

    // Start typewriter animation after component loads
    setTimeout(() => {
      this.startTypewriter();
    }, 500);
  }

  startTypewriter(): void {
    this.typingInterval = setInterval(() => {
      if (this.currentIndex < this.fullText.length) {
        this.displayText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, this.typingSpeed);
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }
  
}
