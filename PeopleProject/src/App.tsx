import { Person } from './Interface + Stats/Person';
import { PersonStatistics } from './Interface + Stats/PersonStatistics';

const people: Person[] = [
    { id: 1, 
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
    
    { id: 3, 
      name: "Király Roland", 
      age: 22, 
      isStudent: true, 
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
const averageAge = stats.GetAverageAge();

const App: React.FC = () => {
    return (
        <div>
            <h1>Average Age</h1>
            <p>{averageAge}</p>
        </div>
    );
}

export default App;
