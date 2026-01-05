import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './project.service';

export interface Experience {
  id: string;
  company: string;
  position: string;
  logoUrl?: string;
  startDate?: string; 
  endDate?: string | null;
  description?: string;
  location?:string;
  skills?: Skill[];
}



@Injectable({
  providedIn: 'root',
})
export class ExperienceService {

  private baseUrl = 'http://localhost:8080/api/experiences';

  constructor(private http : HttpClient){};

   getAllExperiences():Observable<Experience[]>{
      return this.http.get<Experience[]>(`${this.baseUrl}/all`);
    }
    getAllExperiencesWithSkills():Observable<Experience[]>{
      return this.http.get<Experience[]>(`${this.baseUrl}/all-with-skills`);
    }
  
}
