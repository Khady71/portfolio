import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.apiUrl}/api/user`;

  constructor(private http:HttpClient){}

  getUserInfo():Observable<User>{
    return this.http.get<User>(this.baseUrl);
  }
  
}
