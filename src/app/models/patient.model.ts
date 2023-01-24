import { Gender } from "./enums";

export interface PatientRequestModel {
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
    id: string;
    name: string;
    address: string;
    healthProviderEntity: string;
    occupation: string;
    scolarship: string;
    birthDate: Date;
    gender: Gender;
    maritalStatus: number;
}
