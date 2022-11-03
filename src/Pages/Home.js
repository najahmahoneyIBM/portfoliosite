import React from 'react';
import headshot from '../Components/Assests/headshot/colorpic.jpg';
import Navbar from '../Components/Navbar/navbar.js';
import '../index';

const Home = () => {
  return (
    <div className='homepage'>
        <Navbar/>
        <img src={headshot} alt='' className='profilepic'/>
    </div>
  )
}

export default Home