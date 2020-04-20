import React, { Component } from "react";
import styled from "styled-components";
import sideIcon from "../img/nav-side-icon.png";
import brunchLogo from "../img/brunchLogo.png";
import searchIcon from "../img/searchIcon.png";


const SearchIcon = styled.button`
    cursor: pointer;
    height: 25px;
    width: 25px;
    border: none;
    background-image: url(${searchIcon})
`

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
    width: auto;
    display: flex;
    margin-top: 22px;
    margin-left: 27px;
`

const StartButton = styled.button`
    font-family: Noto Sans Light;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
    color: #666;
    width: 64px;
    height: 28px;
    border: 1px solid #959595;
    border-radius: 16px;
    background-color: #fff;
    line-height: 28px;
    weight: 400px;
    margin-left: 1250px;
`


class Navbar extends Component {
  render() {
    return (
      <Container>
        <Button />
        <Img />
        <StartButton>시작하기</StartButton>
        <div style={{ marginLeft: "20px" }}>
          <SearchIcon />
        </div>

      </Container>
    )
  };
}


export default Navbar;