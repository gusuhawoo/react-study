import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Whose name do you want to change?`);
    const current = prompt(`what's your mentor's name?`);
    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`what's your mentor's name?`);
    const title = prompt(`what's your mentor's title?`);
    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`);
    dispatch({ type: 'deleted', name });
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
      <Button text="Change the mentor name." onClick={handleUpdate} />
      <Button text="Add Mentor" onClick={handleAdd} />
      <Button text="Delete Mentor" onClick={handleDelete} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log('Button', text, 're-rendering');

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {text}
    </button>
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
