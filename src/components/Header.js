import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import GlobalFonts from "../fonts/fonts";

const Header = () => {
  return (
    <Wrap>
      <H1Font>
        <GlobalFonts />
        Harry <br />
        Potter
      </H1Font>
    </Wrap>
  );
};

export default Header;

const animate = keyframes`
    0% {
        background-position: 0% 100%
    }
    50% {
        background-position: 100% 100%
    }
    100% {
        background-position: 0% 100%
    }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H1Font = styled.h1`
  font-size: 120px;
  font-family: "HarryFont";
  text-align: center;
  color: transparent;
  background-image: linear-gradient(
    0.25turn,
    #fec001,
    #c91018,
    #ffd63b,
    #282828,
    #015783,
    #c09364,
    #25a148,
    #cdcdcd
  );
  -webkit-background-clip: text;
  animation: ${animate} 20s linear infinite;
  background-size: 1000%;
`;

/* 인물 사진을 넣으려고 했으나
img 전환 애니메이션에서 img가 계속 흔들린다.
const PortraitWrap = styled.div`
  width: 100%;
  height: 100vh;
  transition: 5s;
  background: url("https://mblogthumb-phinf.pstatic.net/MjAxNzAxMDFfMTI5/MDAxNDgzMjczMjM0Nzc2.dTN3E0YXDQ2HzaqYF9PutvW9pOys01V9lLWZtLc_BD4g.jrt05wCU7L8DkbD69XOu0JZuZ85JqjVmB-vUjznGWy4g.JPEG.jshn0107/rmflvlsehfm.jpg?type=w800");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${({ value }) => {
    return css`
        animation: ${ani(
          value
        )} 20s alternate-reverse forwards infinite running ease-in-out}
    `;
  }}
`;
    
const ani = (value) => keyframes`
0%{
    background-image: url(${value[0]})
}
30%{
    background-image: url(${value[1]})
    //background-color: yellow
}
60%{
    background-image: url(${value[2]})
    //background-color: green
}
100%{
    background-image: url(${value[3]})
    //background-color: blue
}
`;
*/
