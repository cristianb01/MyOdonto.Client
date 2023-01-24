import { PatientRequestModel } from "./patient.model";

export interface ClinicHistoryRequestModel {
    expedient: string;
    creationDate: Date;
    doctorId: number;
    patientId: number;
    patient: PatientRequestModel
}

export interface ClinicHistoryResponseModel {
    id: string;
    expedient: string;
    creationDate: Date;
    doctorId: number;
    patientId: number;
}