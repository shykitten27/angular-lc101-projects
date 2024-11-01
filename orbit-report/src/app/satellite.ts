export class Satellite {
    // properties and methods
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) { 
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning(): boolean {
        if(this.type.toLowerCase() === 'space debris') {
            return true;
        }else{
            return false;  
        }
    }
}