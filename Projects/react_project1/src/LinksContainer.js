import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Merch from './Merch';
import Connect from './Connect';

function LinksContainer() {
  return(
    <div className="links-container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/merchandise" component={Merch}/>
        <Route path="/connect" component={Connect}/>
      </Switch>
    </div>
  )
}

export default LinksContainer;