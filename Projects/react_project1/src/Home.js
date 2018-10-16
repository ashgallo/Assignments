import React from 'react';
import Header from './Header';
import HomeLinks from './HomeLinks';
import DisplayBody from './DisplayBody';

const Home = () => {
  return(
    <div>
      <Header />
    </div>,
    <div className='home-links'>
      <HomeLinks />
    </div>
  )
}

export default Home;