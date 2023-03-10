export interface Odontogram {
    conditions: Condition[],
    drawing: string;
}

export interface Condition {
    description: string;
    color: string;
    toothNumber: number;
    toothFace: number;
    additionalInformation: string;
}

interface ConditionDataFromLocalStorage {
    nome: string;
    cor: string;
    numeroDente: number;
    faceDente: number;
    informacoesAdicionais: string;
}

export const mapLocalStorageOdontogramDataToModel = () => {
    let conditions: ConditionDataFromLocalStorage[] = JSON.parse(localStorage.getItem('procedimentos') as string);
    let drawing = localStorage.getItem('desenho') as string;

    const parsedConditions: Condition[] = conditions.map(condition => {
        return {
            description: condition.nome,
            additionalInformation: condition.informacoesAdicionais,
            color: condition.cor,
            toothFace: condition.faceDente,
            toothNumber: condition.numeroDente
        } as Condition
    })

    return {
        conditions: parsedConditions,
        drawing
    } as Odontogram;
} 