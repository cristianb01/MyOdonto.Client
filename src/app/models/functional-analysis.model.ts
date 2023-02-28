import { SectionType } from "./section-type.model";

export interface FunctionalAnalysisAspect extends SectionType {
    functionalAnalysisCharacteristics: FunctionalAnalysisCharacteristic[];
}

export interface FunctionalAnalysisCharacteristic extends SectionType {
    functionalAnalysisAspectId: number;
}

export interface FunctionalAnalysisFormResultWrapper {
    observations: string;
    functionalAnalysisCharacteristics: FunctionalAnalysisRequestModel[];
}

export interface FunctionalAnalysisRequestModel {
    functionalAnalysisCharacteristicId: number;
}
