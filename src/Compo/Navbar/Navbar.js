import React, { Component } from "react";
import styled from "styled-components";
import sideIcon from "../img/nav-side-icon.png";
import brunchLogo from "../img/brunchLogo.png";


const Button = styled.button`
    cursor: pointer;
    height: 25px;
    width: 26px;
    border: none;
    background-image: url(${sideIcon});
    &hoever:{
      cursor: pointer;
    }
`;

const Img = styled.div`
    width: 75px;
    height: 25px;
    background-image: url(${brunchLogo});
    margin-left: 11px;
`

const Container = styled.div`
    height: 30px;
    width: 200px;
    display: flex;
    margin-top: 22px;
    margin-left: 27px;
`

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Button />
        <Img />
      </Container>
    )
  };
}


export default Navbar;