//App.js is our trunk.  Header.js, Section.js, & Footer.js are the branches off the App.js.  All is rendered via the index.js

import React from 'react';

//import our components
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

//render those components using the ReactDOM API
//component, labeled with Uppercase, returns a part of the UI
function App(){
  return (
    <div>
      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App;