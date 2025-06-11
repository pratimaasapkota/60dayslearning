import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CardItem from '../components/CardItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state } = useContext(CartContext);

  if (state.cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {state.cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
