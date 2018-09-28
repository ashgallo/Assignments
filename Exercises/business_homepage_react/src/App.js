import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import Services from "./Services";
import Footer from "./Footer";
import Links from "./Links";

import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Links />
      <Info />
      <Services />
      <Footer />
   </div>
  )
}

// const styles = {
//   bannerStyle: {
//   }
// }

export default App;
