import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Video from "./Video";
import CardList from "./CardList";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

const App = () => {
  const spell = useSelector((state) => state.harryReducer.spell);

  const [location, setLocation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setLocation((location) => ({ ...location, x: e.clientX, y: e.clientY }));
  };

  return (
    <Wrap onMouseMove={handleMouseMove}>
      <Header />
      <SearchWrap>
        <Video />
        <SearchBar />
      </SearchWrap>
      <CardList />
      {spell === "루모스" ? (
        <Light
          locationX={location.x + "px"}
          locationY={location.y + "px"}
        ></Light>
      ) : null}
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: 100%;
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
