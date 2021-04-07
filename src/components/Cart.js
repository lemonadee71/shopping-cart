import React from 'react';

const Cart = ({ numberOfItems }) => {
  return (
    <div>
      {numberOfItems ? (
        <p>You have {numberOfItems} in your cart</p>
      ) : (
        <p>You don't have any items in your cart</p>
      )}
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
