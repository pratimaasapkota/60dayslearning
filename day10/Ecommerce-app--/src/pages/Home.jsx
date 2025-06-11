import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products, loading } = useFetchProducts();

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
