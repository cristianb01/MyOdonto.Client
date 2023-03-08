import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClinicHistoryRequestModel, ClinicHistoryResponseModel } from '../models/clinic-history.model';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicHistoryService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/clinicHistory`;
  }

  public async postClinicHistory(clinicHistory: ClinicHistoryRequestModel): Promise<any> {
    return await 
      lastValueFrom(this.httpClient.post<ClinicHistoryResponseModel>(this.apiUrl, clinicHistory));
  }
}
