import React from "react";

const Person = ({ firstName, lastName, email }) => {
  // console.log(person.name)
  return (
    <div>
      <ul>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
};

export default Person;
