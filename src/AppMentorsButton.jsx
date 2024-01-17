import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`Whose name do you want to change?`);
    const current = prompt(`what's your mentor's name?`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`what's your mentor's name?`);
    const title = prompt(`what's your mentor's title?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`Who do you want to delete?`);
    dispatch({ type: 'deleted', name });
  }, []);

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

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering');
  const result = useMemo(() => calculateSomething(), []);

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
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('☺️');
  }
  return 10;
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
