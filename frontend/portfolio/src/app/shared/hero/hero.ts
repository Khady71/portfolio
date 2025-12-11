import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  user?: User;

  constructor(
    private route : ActivatedRoute,
    private userService: UserService
  ){}

  ngOnInit():void{
    this.userService.getUserInfo().subscribe({
      next: (data) => {
        console.log('User data:', data); // Check the actual structure
        console.log('User properties:', Object.keys(data)); // List all properties
        this.user = data;

      },
      error: (err) => console.error('Error Getting User Info',err)
    });
  }

  
}
