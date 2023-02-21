import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { NonPathologicalPersonalBackgroundType } from '../models/non-pathological-personal-background-types.model';

@Injectable({
  providedIn: 'root'
})
export class NonPathologicalPersonalBackgroundService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/nonPathologicalPersonalBackgroundTypes`;
  }

  public getAllNonPathologicalPersonalBackgroundTypes(): Promise<NonPathologicalPersonalBackgroundType[]> {
    return lastValueFrom(this.httpClient.get<NonPathologicalPersonalBackgroundType[]>(this.apiUrl));
  }
}
