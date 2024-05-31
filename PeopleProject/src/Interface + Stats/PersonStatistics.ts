import { Person } from './Person';

export class PersonStatistics {
    private _people: Person[] = [];

    constructor(people: Person[]) {
        this.people = people;
    }

    public set people(people: Person[]) {
        if (people === null) {
            throw new Error('A lista null értéket nem vehet fel!');
        }
        this._people = people;
    }

    public get people(): Person[] {
        return this._people;
    }

    public GetAverageAge(): number {
        const totalAge = this._people.reduce((sum, person) => sum + person.age, 0);
        return this._people.length > 0 ? totalAge / this._people.length : 0;
    }
}
