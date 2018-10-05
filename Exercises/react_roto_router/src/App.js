import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';

function App() {
  return(
    <div>
     <Header />
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/services" component={Services}/>
     </Switch>
     <Footer />
    </div>
  )
}

export default App;