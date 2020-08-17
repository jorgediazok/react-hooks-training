import React, { Component } from 'react';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Jorge', age: 36 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Manusito', age: 35 },
        { name: 'Stephanie', age: 56 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Jorgito', age: 30 },
        { name: event.target.value, age: 35 },
        { name: 'Stephanie', age: 56 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>We are going to train a bit with React</h1>
        <p>PATADA DE CANGURO GOLPE DURO</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Jorge!!!!!!!')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          change={this.nameChangedHandler}
        >
          Hobbies: Singing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
