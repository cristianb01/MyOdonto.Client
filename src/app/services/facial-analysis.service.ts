import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FacialAnalysisAspect } from '../models/facial-analysis.model';

@Injectable({
  providedIn: 'root'
})
export class FacialAnalysisService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/facialAnalysis`;
  }

  public geatAllFacialAnalysisAspects(): Promise<FacialAnalysisAspect[]> {
    return lastValueFrom(this.httpClient.get<FacialAnalysisAspect[]>(`${this.apiUrl}/getAllAspects`));
  }
}
