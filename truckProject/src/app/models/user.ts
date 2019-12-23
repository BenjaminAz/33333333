import { Package } from './package';
import { Office } from './office';

export class User {
    id: String;
    firstName: String;
    lastName: String;
    dni: Number;
    scan?: {};
    location: String;
    onTravel: boolean;
    bornDate: Date;
    phone: Number;
    email: String;
    password:String;
    package?: Package;
    office?: Office;
    state: String
}