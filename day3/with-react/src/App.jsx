import React from 'react';
import UserCard from './components/UserCard';


function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserCard name="Alice Johnson" age={28} bio="Frontend Developer from React." />
      <UserCard name="Bob Smith" age={34} bio="Backend Engineer who loves Node.js." />
    </div>
  );
}

export default App;
