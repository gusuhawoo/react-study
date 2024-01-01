import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: 'john',
    title: 'junior developer',
    mentors: [
      {
        name: 'ella',
        title: 'senior developer',
      },
      {
        name: 'sara',
        title: 'senior developer',
      },
    ],
  });

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name} mentor is :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name}({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const prev = prompt(`Whose name do you want to change?`);
          const current = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        Change the mentor name.
      </button>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
            // mentors: [{ name, title }, ...person.mentors],
          }));
        }}
      >
        Add Mentor
      </button>
      <button
        onClick={() => {
          const name = prompt(`Who do you want to delete?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((mentor) => mentor.name !== name),
          }));
        }}
      >
        Delete Mentor
      </button>
    </div>
  );
}
