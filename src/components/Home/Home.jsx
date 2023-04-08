import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './home.css'
import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData()
  const [cart, setCart] = useState([])

  const handleCart = (tshirt) => {
    const existItem = cart.find(ts => ts._id == tshirt._id)
    if (existItem) {
      toast("products allready added")
    } else {
      const newCart = [...cart, tshirt]
      setCart(newCart)
    }

  }

  const removedCart = (id) => {
    const remainingTshirt = cart.filter(savedCart => savedCart._id !== id)
    setCart(remainingTshirt)
  }
  return (
    <div className="home-container">
      <div className='tshirt-container'>
        {
          tshirts.map(tshirt => <Tshirt handleCart={handleCart} tshirt={tshirt} key={tshirt._id}></Tshirt>)
        }
      </div>

      <div className="cart-container">
        <Cart removedCart={removedCart} cart={cart}></Cart>
      </div>
    </div>

  );
};

export default Home;