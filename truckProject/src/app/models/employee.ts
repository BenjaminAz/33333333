import { Truck } from './truck';
import { Package } from './package';

export class Employee {
    id: string;
    firstName: String;
    lastName: String;
    age: String;
    truck: Truck;
    package?: Package;
    onTravel: boolean;
}