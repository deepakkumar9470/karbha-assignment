import React from 'react'
import Navbar from './Navbar'





const Home = () => {

  return (
    <div className='main'>      
       <Navbar/>
       <div className="name">
           <h1>Best Themes and Plugins Marketplace</h1>
           <p className="details">
           Welcome to DigiMarket Multi vendor Marketplace Theme. 
           Buy and Sell any kind of Digital Product you Wish.
           </p>
            <div className="btns">
            <a href="#" className='cv-btn'>Shop Now</a>
            <a href="#" className='cv-btn'>Start Selling</a>
            </div>
       </div>
    </div>
   )
}

export default Home