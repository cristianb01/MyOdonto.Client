import { SectionType } from "./section-type.model";

export interface FacialAnalysisAspect extends SectionType {
    facialAnalysisCharacteristics: FacialAnalysisCharacteristic[];
}

export interface FacialAnalysisCharacteristic extends SectionType {
    facialAnalysisAspectId: number;
    facialAnalysisAspect: string;
}

export interface FacialAnalysisCharacteristicRequestModel {
    facialAnalysisCharacteristicId: number;
}

export interface FacialAnalysisFormResultWrapper {
    observations: string;
    facialAnalysisCharacteristics: FacialAnalysisCharacteristicRequestModel[];
}