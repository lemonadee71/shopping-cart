import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = ({ data, addToCart }) => {
  const [currentItem, setCurrentItem] = useState();
  const [quantity, setQuantity] = useState(0);
  let { id } = useParams();

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const checkout = () => {
    alert('Item added to cart');
    // Price is 10 for now
    addToCart({ id, quantity, price: 10 });
    setQuantity(0);
  };

  useEffect(() => {
    const item = data[+id - 1];
    setCurrentItem(item || null);
  }, [id, data]);

  return (
    <div>
      {currentItem ? (
        <>
          {/* Repetitive. This component is the same as in CartItem */}
          <h1>{currentItem.title}</h1>
          <div>
            <img src={currentItem.url} alt="product" />
          </div>
          <button onClick={increment}>+</button>
          <span>{quantity}</span>
          <button onClick={decrement}>-</button>
          <button disabled={!quantity} onClick={checkout}>
            Checkout
          </button>
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
