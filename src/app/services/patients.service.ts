import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PatientResponseModel } from '../models/patient.model';
import { RequestModel } from '../models/request-model.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private readonly apiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = `${environment.apiUrl}/patient`;
  }

  public async getPatients(requestModel: RequestModel): Promise<PatientResponseModel[]> {
    let params = new HttpParams({fromObject: requestModel as any});
    return await lastValueFrom(this.httpClient.get<PatientResponseModel[]>(`${this.apiUrl}`, {params}));
  }

  public async getPatient(identification: string): Promise<PatientResponseModel> { 
    return await lastValueFrom(this.httpClient
      .get<PatientResponseModel>(`${this.apiUrl}/getByIdentification/${identification}`));
  }

}
