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
    grid-template-columns: repeat(8, 120px);
    grid-template-rows: repeat(3, 120px);
    width: 960px;
    heigth: 363px;
    margin: 46px auto 0;
    position: relative;

`

const Div = styled.div`
    width: 119px;
    height: 119px;
    text-align: center;
    border: 1px solid #eee;
    z-index: 1;
    font-size: 13px;
    line-height: 18px;
    &:hover{
      border-color: #00C3BD;
      color: #00C3BD;
      z-index: 2;
      text-decoration: none;
      cursor:pointer;
    }
`

const Span = styled.span`
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    color: #495057;
`

function Brunchkeyword(props) {
  return (
    <div>
      <Keyword />
      <UnderText></UnderText>
      <div style={{

      }}>
        <div style={{

        }}>
          <TemplateGrid>
            <Div><Span>지구한바퀴<br />세계여행</Span></Div>
            <Div><Span>그림·웹툰</Span></Div>
            <Div><Span>시사·이슈</Span></Div>
            <Div><Span>IT<br />트렌드</Span></Div>
            <Div><Span>사진·촬영</Span></Div>
            <Div><Span>취향저격<br />영화 리뷰</Span></Div>
            <Div><Span>오늘은<br />이런 책</Span></Div>
            <Div><Span>뮤직 인사이드</Span></Div>
            <Div><Span>글쓰기<br />코치</Span></Div>
            <Div><Span>직장인<br />현실 조언</Span></Div>
            <Div><Span>스타트업<br />경험담</Span></Div>
            <Div><Span>육아<br />이야기</Span></Div>
            <Div><Span>요리·레시피</Span></Div>
            <Div><Span>건강·운동</Span></Div>
            <Div><Span>멘탈 관리<br />심리 탐구</Span></Div>
            <Div><Span>디자인<br />스토리</Span></Div>
            <Div><Span>문화·예술</Span></Div>
            <Div><Span>건축·설계</Span></Div>
            <Div><Span>인문학·철학</Span></Div>
            <Div><Span>쉽게 읽는<br />역사</Span></Div>
            <Div><Span>우리집<br />반려동물</Span></Div>
            <Div><Span>멋진<br />캘리그래피</Span></Div>
            <Div><Span>사랑·이별</Span></Div>
            <Div><Span>감성<br />에세이</Span></Div>
          </TemplateGrid>
        </div>
      </div>
    </div >
  );
}

export default Brunchkeyword;