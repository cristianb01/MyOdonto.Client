import { PathologicalPersonalBackground } from "./pathological-personal-background.model";
import { PatientRequestModel } from "./patient.model";

export class ClinicHistoryRequestModel {
    public expedient: string | null;
    public creationDate: Date | null;
    public doctorId: number | null;
    public patientId?: number | null;
    public patient: PatientRequestModel | null;
    public pathologicalPersonalBackgrounds: PathologicalPersonalBackground[] | null;
    public familyBackgroundObservations: string | null;

    /**
     *
     */
    constructor() {
        this.expedient = null;
        this.creationDate = null;
        this.doctorId = null;
        this.patientId = null;
        this.patient = null;
        this.pathologicalPersonalBackgrounds = null;
        this.familyBackgroundObservations = null;
    }
}

export interface ClinicHistoryResponseModel {
    id: string;
    expedient: string;
    creationDate: Date;
    doctorId: number;
    patientId: number;
}