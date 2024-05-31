import { Person } from './Interface + Stats/Person';
import { PersonStatistics } from './Interface + Stats/PersonStatistics';

const people: Person[] = [
  {
    id: 1,
    name: "Szalai József",
    age: 18,
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
    name: "",
    age: 12,
    isStudent: true,
    score: 26
  }
];

const stats = new PersonStatistics(people);

const App: React.FC = () => {
  const personWithHighestScore = stats.GetPersonWithHighestScore();

  return (
    <div>
      <h1>Average Age</h1>
        <p>{stats.GetAverageAge()}</p>
      <br />

      <h1>Number of Students</h1>
        <p>{stats.GetNumberOfStudents()}</p>
      <br />

      <h1>Person with Highest Score</h1>
        {personWithHighestScore && (<p>{personWithHighestScore.name}</p>)}
      <br />
      
      <h1>Average Score of Students</h1>
        <p>{stats.GetAverageScoreOfStudents()}</p>
      <br />

    </div>
  );
}

export default App;
