//this file is not capitalized; index.js is not a component.  
//render on this page renders to the virtual DOM by bringing in App.js component(trunk) and all its components(branches)

//import React API - compiles the virtual DOM & has equivalents of DOM elements like div, h1, etc.
  //  -writing html in the JS, called JSX
//import ReactDOM API - converts the virtual DOM into the real/actual DOM
import React from "react";
import { render } from "react-dom";

//import our components
import App from "./App";


render(
  //thing to render. can only have one root element
  <App />, //component goes here as an html element to render to the DOM
  //place to render/mount it to
  document.getElementById("root")
)
