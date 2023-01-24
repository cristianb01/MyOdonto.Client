export interface RequestModel {
    skip: number;
    take: number;
    keyword: string;
    startDate?: Date;
    endDate?: Date;
}