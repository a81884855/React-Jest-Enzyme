import React from "react";

export default ({ people = [] }) => {
  return (
    <div>
      <ul>
        {people.map((person) => (
          <li key={person}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};
