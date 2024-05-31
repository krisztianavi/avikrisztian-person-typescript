import { Person } from './Person';
import { PersonStatistics } from './PersonStatistics';

describe('PersonStatistics', () => {
    let stats: PersonStatistics;
    let people: Person[];

    beforeEach(() => {
        people = [
            {
                id: 1,
                name: "Szalai József",
                age: 19,
                isStudent: true,
                score: 65
            },

            {
                id: 2,
                name: "Faragó Henrik",
                age: 30,
                isStudent: false,
                score: 87
            },

            {
                id: 3,
                name: "Király Roland",
                age: 22,
                isStudent: false,
                score: 91
            },

            {
                id: 4,
                name: "Simon Noel",
                age: 16,
                isStudent: true,
                score: 53
            },

            {
                id: 5,
                name: "Kengyel Ferenc",
                age: 12,
                isStudent: true,
                score: 1000
            }
        ];
        stats = new PersonStatistics(people);
    });

    test('GetAverageAge returns the average age of all persons', () => {
        expect(stats.GetAverageAge()).toBeCloseTo(20, 1);
    });

    test('GetNumberOfStudents returns the number of students', () => {
        expect(stats.GetNumberOfStudents()).toBe(3);
    });

    test('GetPersonWithHighestScore returns the person with the highest score', () => {
        expect(stats.GetPersonWithHighestScore()).toEqual(people[4]);
    });

    test('GetAverageScoreOfStudents returns the average score of students', () => {
        expect(stats.GetAverageScoreOfStudents()).toBeCloseTo(74, 2);
    });

    test('GetOldestStudent returns the oldest student', () => {
        expect(stats.GetOldestStudent()).toEqual(people[1]);
    });

    test('IsAnyoneFailing returns true if any person scored less than 40', () => {
        expect(stats.IsAnyoneFailing()).toBe(true);
    });

    test('Set people setter changes the people array and updates statistics', () => {
        const newPeople: Person[] = [
            { id: 6, name: "Anna Géza", age: 21, isStudent: true, score: 88 },
            { id: 7, name: "Tamás Rebeka", age: 3, isStudent: false, score: 2 }
        ];
        stats.people = newPeople;
        expect(stats.GetAverageAge()).toBeCloseTo(12, 1);
        expect(stats.GetNumberOfStudents()).toBe(2);
        expect(stats.GetPersonWithHighestScore()).toEqual(newPeople[0]);
        expect(stats.GetAverageScoreOfStudents()).toBeCloseTo(45, 1);
        expect(stats.GetOldestStudent()).toEqual(newPeople[0]);
        expect(stats.IsAnyoneFailing()).toBe(false);
    });
});
