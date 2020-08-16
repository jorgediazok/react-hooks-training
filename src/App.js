import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>We are going to train a bit with React</h1>
      <p>PATADA DE CANGURO GOLPE DURO</p>
      <Person name="Jorge" age="36" />
      <Person name="Wos" age="25">
        Hobbies: Singing
      </Person>
      <Person name="Rupert" age="29" />
    </div>
  );
}

export default App;
