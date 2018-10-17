import React from 'react';
import MerConLinks from './MerConLinks';
import HomeContent from './HomeContent';
import Footer from './Footer';

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
    <Footer />
  </div>
)

export default Home;