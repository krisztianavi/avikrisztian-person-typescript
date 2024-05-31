import { Person } from './Person';

export class PersonStatistics {
    private lpeople: Person[] = [];

    constructor(people: Person[]) {
        this.people = people;
    }

    public set people(people: Person[]) {
        if (people === null) {
            throw new Error('A lista null értéket nem vehet fel!');
        }
        this.lpeople = people;
    }

    public get people(): Person[] {
        return this.lpeople;
    }

    public GetAverageAge(): number {
        const totalAge = this.lpeople.reduce((sum, person) => sum + person.age, 0);
        return this.lpeople.length > 0 ? totalAge / this.lpeople.length : 0;
    }

    public GetNumberOfStudents(): number {
        return this.lpeople.filter(person => person.isStudent).length;
    }
}
