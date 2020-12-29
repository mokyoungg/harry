import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import CardList from "./CardList";
import styled, { css } from "styled-components";

const App = () => {
  const [location, setLocation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setLocation((location) => ({ ...location, x: e.clientX, y: e.clientY }));
  };

  return (
    <Wrap onMouseMove={handleMouseMove}>
      <ContentWrap>
        <Video />
        <SearchBar />
      </ContentWrap>
      <CardList />
      {/*
      <Light
        locationX={location.x + "px"}
        locationY={location.y + "px"}
    ></Light>*/}
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: 100%;
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid red;
  width: 450px;
  margin: 0 auto;
`;

const Light = styled.div`
  z-index: 1000;
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
`;
