import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SectionType } from '../models/section-type.model';

@Injectable({
  providedIn: 'root'
})
export class PathologicalPersonalBackgroundTypesService {
  
  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/pathologicalPersonalBackgroundTypes`;
  }
  
  public async getAllPathologicalPersonalBackgroundTypes(): Promise<SectionType[]> {
    return await lastValueFrom(this.httpClient.get<SectionType[]>(this.apiUrl));
  }

}
