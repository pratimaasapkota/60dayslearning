import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [greet, setGreet] = useState('');

  const handleGreet = () => {
    if (name.trim() !== '') {
      setGreet(`Hello, ${name}! 👋`);
    } else {
      setGreet('Please enter your name!');
    }
  };

  return (
    <div>
      <h2>Home Page</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Greet</button>
      <p>{greet}</p>
    </div>
  );
}
