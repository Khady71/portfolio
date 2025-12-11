import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Skill {
  id: string;
  name: string;
  iconUrl?: string;
  category?: 'FRONTEND' | 'BACKEND' | 'DEVOPS' | 'DATABASE' | 'TOOL' | 'DESIGN';
  level?: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
}


export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  coverImageUrl?: string;
  images?: string[];
  skills?: Skill[]; 
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080/api/projects';

  constructor(private http : HttpClient){}

  getAllprojects():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.baseUrl}/all`);
  }

  getProjectBySlug(slug: string): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/slug/${slug}`);
  }


  
}
