import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, data, addToCart, removeFromCart }) => {
  const [numberOfItems, setNumberOfItems] = useState(Object.keys(items).length);

  useEffect(() => {
    setNumberOfItems(Object.keys(items).length);
  }, [items]);

  return (
    <div>
      {numberOfItems ? (
        <p>You have {numberOfItems} in your cart</p>
      ) : (
        <p>You don't have any items in your cart</p>
      )}
      <div>
        {items &&
          Object.keys(items).map((id) => {
            const itemCount = items[id];

            return itemCount ? (
              <CartItem
                key={id}
                item={data[+id - 1]}
                count={itemCount}
                increment={addToCart}
                decrement={removeFromCart}
              />
            ) : null;
          })}
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
