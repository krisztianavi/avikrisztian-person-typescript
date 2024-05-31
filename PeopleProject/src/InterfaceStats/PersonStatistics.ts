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
        const validPeopleCount = this.lpeople.filter(person => person.age !== null).length;
        return validPeopleCount > 0 ? totalAge / validPeopleCount : 0;
    }

    public GetNumberOfStudents(): number {
        return this.lpeople.filter(person => person.isStudent && person.age !== null).length;
    }

    public GetPersonWithHighestScore(): Person | null {
        const validPeople = this.lpeople.filter(person => person.score !== null);
        if (validPeople.length === 0) return null;
        return validPeople.reduce((max, person) => person.score > max.score ? person : max);
    }

    public GetAverageScoreOfStudents(): number {
        const validStudents = this.lpeople.filter(person => person.isStudent && person.score !== null);
        const totalScore = validStudents.reduce((sum, student) => sum + student.score, 0);
        const validStudentsCount = validStudents.length;
        return validStudentsCount > 0 ? totalScore / validStudentsCount : 0;
    }

    public GetOldestStudent(): Person | null {
        const validStudents = this.lpeople.filter(person => person.isStudent && person.age !== null);
        if (validStudents.length === 0) return null;
        return validStudents.reduce((oldest, student) => student.age > oldest.age ? student : oldest);
    }

    public IsAnyoneFailing(): boolean {
        return this.lpeople.some(person => person.score !== null && person.score < 40);
    }

    public setScore(personId: number, score: number): void {
        const personIndex = this.lpeople.findIndex(person => person.id === personId);
        if (personIndex !== -1) {
            if (score >= 0 && score <= 100) {
                this.lpeople[personIndex].score = score;
            } else {
                throw new Error('A pontszám csak 0 és 100 között lehet!');
            }
        } else {
            throw new Error('Nem található személy ezzel az azonosítóval!');
        }
    }
}
