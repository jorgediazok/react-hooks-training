import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>We are going to train a bit with React</h1>
      <p className={assignedClasses.join(' ')}>PATADA DE CANGURO GOLPE DURO</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
