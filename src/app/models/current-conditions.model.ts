export interface CurrentCondition {
    hasSufferedFrom: boolean;
    currentConditionTypeId: number;
}

export interface CurrenConditionFormResultWrapper {
    observations: string;
    currentConditions: CurrentCondition[];
}
