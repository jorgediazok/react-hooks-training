import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Jorge', age: 36 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    username: 'superJorge',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                change={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>We are going to train a bit with React</h1>
          <p className={classes.join(' ')}>PATADA DE CANGURO GOLPE DURO</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
