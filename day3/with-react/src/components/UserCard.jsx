import React from 'react';

function UserCard({ name, age, bio }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    width: '250px',
    margin: '10px auto',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  }
};

export default UserCard;
