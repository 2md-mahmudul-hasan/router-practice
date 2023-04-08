import React from 'react';

const Cart = ({ cart, removedCart }) => {
  console.log(removedCart)

  return (
    <div>
      {cart.map(tshirt => <p>{tshirt.name} <button onClick={() => removedCart(tshirt._id)}>X</button></p>)}
    </div>
  );
};

export default Cart;