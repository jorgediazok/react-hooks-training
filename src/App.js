import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Jorge', age: 36 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Jorgito', age: 30 },
        { name: 'Manusito', age: 35 },
        { name: 'Stephanieta', age: 56 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>We are going to train a bit with React</h1>
      <p>PATADA DE CANGURO GOLPE DURO</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Hobbies: Singing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;

/*state = {
    persons: [
      { name: 'Jorge', age: 36 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Jorgito', age: 30 },
        { name: 'Manusito', age: 35 },
        { name: 'Stephanieta', age: 56 },
      ],
    });
  };*/
