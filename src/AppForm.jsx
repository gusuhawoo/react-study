import React, { useState } from 'react';

export default function AppMentors() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="email">e-mail:</label>
      <input
        type="email"
        id="email"
        email="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}
