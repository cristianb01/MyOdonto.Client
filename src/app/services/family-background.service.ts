import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SectionType } from '../models/section-type.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyBackgroundService {

  private readonly apiUrl;
  
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/familyBackgroundTypes`;
  }

  public getAllFamilyBackgroundTypes(): Promise<SectionType[]> {
    return lastValueFrom(this.httpClient.get<SectionType[]>(this.apiUrl))
  }
}
