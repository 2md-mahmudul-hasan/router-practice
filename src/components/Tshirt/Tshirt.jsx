import React from 'react';
import './tshirt.css'

const Tshirt = ({ tshirt, handleCart }) => {
  const { name, picture, price, id, index, quantity } = tshirt;
  return (
    <div className='tshirt'>
      <img style={{ 'width': '300px', 'height': '300px' }} src={picture}></img>
      <b>{name}</b>
      <p>price:${price}</p>

      <button onClick={() => handleCart(tshirt)}>Buy now </button>
    </div>
  );
};

export default Tshirt;