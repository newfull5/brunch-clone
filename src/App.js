import React from 'react';
import Navbar from './Compo/Navbar/Navbar.js';
import TextContain from './Compo/TextContain/TextContain.js';
import JumboTron from "./Compo/img/jumbotron.png";
import Brunchkeyword from "./Compo/BrunchKeyword/BrunchKeyword.js";


function App() {
  return (
    <div>
      <Navbar></Navbar>
        <div style={{ marginLeft: "280px", wordSpacing: "-10px" }}>
          <TextContain></TextContain>
          <div><img src={JumboTron} style={{width:"1239px", marginTop:"40px"}}></img></div>
        </div>
      <Brunchkeyword></Brunchkeyword>
    </div >
  );
}

export default App;
