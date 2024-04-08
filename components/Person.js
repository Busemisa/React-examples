import React from 'react'

function Person(props) {
  return (
    <div>
      <h3>İsim: {props.name}</h3>
      <h3>Yaş: {props.age}</h3>
    </div>
  );
}

export default Person
