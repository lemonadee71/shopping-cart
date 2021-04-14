import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, data, addToCart, removeFromCart }) => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tallyItems = () => {
      let validItems = 0;
      let totalPrice = 0;

      Object.values(items).forEach(({ quantity, price }) => {
        if (quantity) {
          validItems++;
          totalPrice += quantity * price;
        }
      });

      return [validItems, totalPrice];
    };

    const [validItems, totalPrice] = tallyItems();

    setNumberOfItems(validItems);
    setTotal(totalPrice);
  }, [items]);

  return (
    <div>
      {numberOfItems ? (
        <>
          <p>You have {numberOfItems} in your cart</p>
          <p>Your total is ${total}</p>
        </>
      ) : (
        <p>You don't have any items in your cart</p>
      )}
      <div>
        {items &&
          Object.keys(items).map((id) => {
            const cartItem = items[id];

            return cartItem.quantity ? (
              <CartItem
                key={id}
                info={cartItem}
                item={data[+id - 1]}
                count={cartItem.quantity}
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
