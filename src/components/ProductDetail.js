import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = ({ data }) => {
  const [currentItem, setCurrentItem] = useState();
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
    const item = data[+id - 1];
    setCurrentItem(item || null);
  }, [id, data]);

  return (
    <div>
      {currentItem ? (
        <>
          <h1>{currentItem.title}</h1>
          <div>
            <img src={currentItem.url} alt="product" />
          </div>
        </>
      ) : (
        <>
          <h2>No product with id: {id}</h2>
          <Link to="/shop">Browse Shop</Link>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
