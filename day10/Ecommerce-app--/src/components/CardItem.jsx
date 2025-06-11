import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div style={{ border: '1px solid black', margin: '1rem', padding: '1rem' }}>
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default CartItem;
