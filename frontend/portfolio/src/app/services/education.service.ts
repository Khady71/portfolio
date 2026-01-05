import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Education {
  id: string;
  school: string;
  degree: string;
  field?: string;
  location?:string;
  startDate?: string; 
  logoUrl?:string;
  endDate?: string | null;
  description?: string;
}


@Injectable({
  providedIn: 'root',
})
export class EducationService {

   private baseUrl = environment.apiUrl;

  constructor(private http : HttpClient){};

   getAllEducation():Observable<Education[]>{
      return this.http.get<Education[]>(`${this.baseUrl}/all`);
    }
  
}
