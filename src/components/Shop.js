import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

const Shop = ({ data }) => {
  return (
    <div style={style}>
      {data.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <ProductCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default Shop;
