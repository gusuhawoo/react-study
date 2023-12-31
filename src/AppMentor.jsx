import React, { useState } from 'react';

// // JavaScript grammar
// const obj = {
//   name: 'john',
//   title: 'junior developer',
//   mentor: {
//     name: 'ella',
//     title: 'senior developer',
//   },
// };

// const name = 'update name';

// const update = {
//   ...obj,
//   mentor: { ...obj.mentor, name },
// };

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'john',
    title: 'junior developer',
    mentor: {
      name: 'ella',
      title: 'senior developer',
    },
  });

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name} mentor is {person.mentor.name}({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        Change the mentor name.
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        Change the mentor title.
      </button>
    </div>
  );
}
