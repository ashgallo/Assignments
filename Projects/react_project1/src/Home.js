import React from 'react';
//import Header from './Header';
import MerConLinks from './MerConLinks';
import HomeContent from './HomeContent';

const Home = () => (
  <div className='home'>
    <div>
      <h1>Taco Taco</h1>
    </div>
    <nav className='mercon-links'>
      <MerConLinks />
    </nav>
    <nav>
      <HomeContent />
    </nav>
  </div>
)

export default Home;