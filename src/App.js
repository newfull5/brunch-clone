import React from 'react';
import Navbar from './Compo/Navbar/Navbar.js';
import TextContain from './Compo/TextContain/TextContain.js';
import JumboTron from "./Compo/img/jumbotron.png";
import Brunchkeyword from "./Compo/BrunchKeyword/BrunchKeyword.js";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ height: "600px", margin: "0 0 0 280px " }}>
        <TextContain></TextContain>
        <img src={JumboTron} style={{ display: "block", maxHeight: "auto", maxWidth: "100%", marginTop: "50px"}} />
      </div>
      <div style={{ width: "auto", height: "500px", marginTop: "400px"}}>
        <Brunchkeyword></Brunchkeyword>
      </div>
    </div >
  );
}

export default App;
