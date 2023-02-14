import { Gender } from "./enums";

export interface PatientRequestModel {
    id?: string;
    identification: string;
    name: string;
    address: string;
    healthProviderEntity: string;
    occupation: string;
    scolarship: string;
    birthDate: Date;
    gender: Gender;
    maritalStatus: number;
}


export interface PatientResponseModel {
    id: number;
    name: string;
    address: string;
    identification: string;
    healthProviderEntity: string;
    occupation: string;
    scolarship: string;
    birthDate: Date;
    gender: Gender;
    maritalStatus: number;
}
