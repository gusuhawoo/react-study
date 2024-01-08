import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentors() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Whose name do you want to change?`);
    const current = prompt(`what's your mentor's name?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`what's your mentor's name?`);
    const title = prompt(`what's your mentor's title?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      if (index < 0) return;
      person.mentors.splice(index, 1);
    });
  };

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
      <button onClick={handleUpdate}>Change the mentor name.</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </div>
  );
}

const initialPerson = {
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
};
