import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart ({state.cart.length})</Link>
    </nav>
  );
};

export default Navbar;
