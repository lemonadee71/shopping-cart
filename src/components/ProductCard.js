import React from 'react';

const ProductCard = ({ info }) => {
  return (
    <div>
      <img src={info.thumbnailUrl} alt="product" />
    </div>
  );
};

export default ProductCard;
