import { Doctor } from "./doctor.model";

export interface User extends Doctor {
    configuration: any;
}