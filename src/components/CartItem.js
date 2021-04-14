import React from 'react';

const CartItem = ({ item, info, count, increment, decrement }) => {
  const onIncrement = () => {
    increment({ id: item.id, quantity: 1, price: info.price });
  };

  const onDecrement = () => {
    decrement({ id: item.id, quantity: 1, price: info.price });
  };

  return (
    <div>
      <h1>{item.id}</h1>
      <div>
        <img src={item.thumbnailUrl} alt="product" />
      </div>
      <button onClick={onIncrement}>+</button>
      <span>{count}</span>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default CartItem;
