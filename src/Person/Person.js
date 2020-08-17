import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I am a {props.name} and i am {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
