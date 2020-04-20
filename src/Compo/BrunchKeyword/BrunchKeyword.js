import React from 'react';
import styled from 'styled-components';
import textImg from '../img/txt_brunch.png';


const Keyword = styled.h3`
    display : block;
    background-position: -101px -300px;
    background-image: url(${textImg});
    overflow: hidden;
    margin: 169px auto 0;
    text-indent: -9999px;
    width: 266px;
    height: 13px;
`

const UnderText = styled.h3`
    display: block;
    width: 149px;
    height: 11px;
    background-position: -175px 0;
    margin: 17px auto;
    background-image: url(${textImg});
`

const TemplateGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 119px);
    grid-template-rows: repeat(3, 119px)
    margin: 10px auto 0;
`

function Brunchkeyword(props) {
  return (
    <div>
      <Keyword />
      <UnderText></UnderText>
      <TemplateGrid>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
        <div>dhtocks</div>
      </TemplateGrid>
    </div>
  );
}

export default Brunchkeyword;