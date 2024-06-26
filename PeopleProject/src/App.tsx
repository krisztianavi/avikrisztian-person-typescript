import { Person } from './Interface + Stats/Person';
import { PersonStatistics } from './Interface + Stats/PersonStatistics';
import './App.css'

const people: Person[] = [
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
    score: 26
  }
];

const stats = new PersonStatistics(people);

const App: React.FC = () => {
  const personWithHighestScore = stats.GetPersonWithHighestScore();
  const oldestStudent = stats.GetOldestStudent();

  return (
    <div className='container'>
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

      <h1>Oldest Student</h1>
        {oldestStudent && (<p>{oldestStudent.name}</p>)}
      <br />

      <h1>Is Anyone Failing</h1>
        <p>{stats.IsAnyoneFailing() ? 'Yes' : 'No'}</p>
      <br />
    </div>
  );
}

export default App;
