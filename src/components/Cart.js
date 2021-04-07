import React from 'react';
import CartItem from './CartItem';

const Cart = ({ items, data, addToCart, removeFromCart }) => {
  const numberOfItems = Object.keys(items).length;

  return (
    <div>
      {numberOfItems ? (
        <p>You have {numberOfItems} in your cart</p>
      ) : (
        <p>You don't have any items in your cart</p>
      )}
      <div>
        {items &&
          Object.keys(items).map((id) => (
            <CartItem
              key={id}
              item={data[+id - 1]}
              count={items[id]}
              increment={addToCart}
              decrement={removeFromCart}
            />
          ))}
      </div>

      <button
        disabled={!numberOfItems}
        onClick={() => alert(`${numberOfItems} items checked out`)}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
