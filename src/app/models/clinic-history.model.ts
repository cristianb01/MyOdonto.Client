import { Patient } from "./patient.model";

export interface ClinicHistoryRequestModel {
    expedient: string;
    identification: string;
    creationDate: Date;
    doctorId: number;
    patientId: number;
    patient: Patient
}

export interface ClinicHistoryResponseModel {
    id: string;
    expedient: string;
    identification: string;
    creationDate: Date;
    doctorId: number;
    patientId: number;
}