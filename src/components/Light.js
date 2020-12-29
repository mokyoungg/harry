import React, { useState } from "react";
import styled, { css } from "styled-components";

const Light = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };

  console.log(state);
  return (
    <Wrap onMouseMove={handleMouseMove}>
      {/*<Te>Light</Te>*/}
      <Li locationX={state.x + "px"} locationY={state.y + "px"}></Li>
    </Wrap>
  );
};

export default Light;

const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Te = styled.h2`
  color: #fff;
  font-size: 15em;
  cursor: default;
`;

const Li = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  ${(props) => css`
    background: radial-gradient(
      circle at ${props.locationX} ${props.locationY},
      transparent 10%,
      rgba(0, 0, 0, 0.95) 20%
    );
  `};
  /*
  background: radial-gradient(
    circle at 50% 50%,
    transparent 10%,
    rgba(0, 0, 0, 0.95) 20%
  );*/
`;
