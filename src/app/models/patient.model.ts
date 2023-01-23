import { Gender } from "./enums";

export interface Patient {
    name: string;
    address: string;
    healthProviderEntity: string;
    occupation: string;
    scolarship: string;
    birthDate: Date;
    gender: Gender;
    maritalStatus: number;
}
