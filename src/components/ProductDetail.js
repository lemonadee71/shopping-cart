import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = ({ data, add, remove }) => {
  const [currentItem, setCurrentItem] = useState();
  // const [itemCount, setItemCount] = useState(0)
  let { id } = useParams();

  useEffect(() => {
    // setItemCount(0)

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
          <button onClick={() => add(1)}>+</button>
          <button onClick={() => remove(1)}>-</button>
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
