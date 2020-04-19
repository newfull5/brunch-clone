import React, { Component } from 'react'
import styled from 'styled-components';

const Text = styled.div`
    margin-top: 0;
    font-size: ${props => (props.clear ? "32px" : "40px")};   
    font-weight: 400;
    font-family: NanumMyeongjo;
    line-height: ${props => (props.clear ? "46px" : "60px")};
    color: ${props => (props.clear ? "#cacaca" : "#1a1a1a")}; 
    text-align: left;
    letter-spacing: -.05em;
    word-spacing: 1px;
`

class TextContain extends Component {

  render() {
    return (
      <div>
        <Text>글이 작품이 되는 공간, 브런치</Text>
        <Text clear>브런치에 담긴 아름다운 작품을 감상해 보세요.<br/>그리고 다시 꺼내 보세요.</Text>
        <Text clear style={{color:"#dedede"}}>서랍 속 간직하고 있는 글과 감성을.</Text>
      </div>
    );
  }
}


export default TextContain