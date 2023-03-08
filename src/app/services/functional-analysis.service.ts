import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FunctionalAnalysisAspect } from '../models/functional-analysis.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionalAnalysisService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/functionalAnalysis`;
  }

  public getAllFunctionalAnalysisAspects(): Promise<FunctionalAnalysisAspect[]> {
    return lastValueFrom(this.httpClient.get<FunctionalAnalysisAspect[]>(`${this.apiUrl}/getAllAspects`));
  }
}
