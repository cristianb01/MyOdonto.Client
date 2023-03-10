import { FamilyBackground } from "./family-background.model";
import { FunctionalAnalysisRequestModel } from "./functional-analysis.model";
import { Odontogram } from "./odontogram.model";
import { PathologicalPersonalBackground } from "./pathological-personal-background.model";
import { PatientRequestModel } from "./patient.model";

export class ClinicHistoryRequestModel {
    public expedient: string | null;
    public creationDate: Date | null;
    public doctorId: number | null;
    public patientId?: number | null;
    public patient: PatientRequestModel | null;
    public pathologicalPersonalBackgrounds: PathologicalPersonalBackground[] | null;
    public nonPathologicalPersonalBackgrounds: PathologicalPersonalBackground[] | null;
    public familyBackgrounds: FamilyBackground[] | null;
    public facialAnalysis: FunctionalAnalysisRequestModel[] | null;
    public functionalAnalysis: FunctionalAnalysisRequestModel[] | null;
    public odontogram: Odontogram | null;

    public currentConditionsObservations: string | null;
    public familyBackgroundObservations: string | null;
    public facialAnalysisObservations: string | null;
    public functionalAnalysisObservations: string | null;


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
        this.nonPathologicalPersonalBackgrounds = null;
        this.familyBackgrounds = null;
        this.facialAnalysis = null;
        this.functionalAnalysis = null;
        this.odontogram = null;

        this.familyBackgroundObservations = null;
        this.currentConditionsObservations = null;
        this.facialAnalysisObservations = null;
        this.functionalAnalysisObservations = null;
    }
}

export interface ClinicHistoryResponseModel {
    id: string;
    expedient: string;
    creationDate: Date;
    doctorId: number;
    patientId: number;
}