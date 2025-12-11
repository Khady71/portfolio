export interface Experience {
  id: string;
  company: string;
  position: string;
  logoUrl?: string;
  startDate?: string; 
  endDate?: string | null;
  description?: string;
  technologies?: string[];
}
