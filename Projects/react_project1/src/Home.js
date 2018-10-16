import React from 'react';
import Header from './Header';
import HomeLinks from './HomeLinks';
import HomeContent from './HomeContent';

const Home = () => (
  <div>
    <div>
      <Header />
    </div>
    <div className='home-links'>
      <HomeLinks />
    </div>
    <div className='home-content'>
      <HomeContent />
    </div>
  </div>
)

export default Home;