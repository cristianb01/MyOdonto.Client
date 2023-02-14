import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PathologicalPersonalBackgroundType } from '../models/pathological-personal-background-type.model';

@Injectable({
  providedIn: 'root'
})
export class PathologicalPersonalBackgroundTypesService {
  
  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/pathologicalPersonalBackgroundTypes`;
  }
  
  public async getAllPathologicalPersonalBackgroundTypes(): Promise<PathologicalPersonalBackgroundType[]> {
    return await lastValueFrom(this.httpClient.get<PathologicalPersonalBackgroundType[]>(this.apiUrl));
  }

}
