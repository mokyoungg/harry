import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Video from "./Video";
import CardList from "./CardList";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import paper from "../img/paper.png";

const App = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  const spell = useSelector((state) => state.harryReducer.spell);
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [path, setPath] = useState([
    //1
    { x: 0, y: 100 },
    { x: 0, y: 200 },
    //2
    { x: -300, y: 200 },
    { x: -500, y: 200 },
    { x: -700, y: 200 },
    //3
    { x: -800, y: 300 },
    { x: -800, y: 500 },
    { x: -800, y: 700 },
    //4
    { x: -800, y: 800 },
    { x: -800, y: 900 },
    { x: 0, y: 900 },
    { x: 200, y: 900 },
    { x: 400, y: 900 },
  ]);

  useEffect(() => {
    const element = ref.current;
    const paperImg = element.children[0];

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
      },
    });
    tl.to(paperImg, {
      duration: 10,
      motionPath: {
        path: path,
        align: "self",
      },
    });
  }, []);

  const handleMouseMove = (e) => {
    e.persist();
    setLocation((location) => ({ ...location, x: e.clientX, y: e.clientY }));
  };

  return (
    <Wrap ref={ref} onMouseMove={handleMouseMove}>
      <PaperImg src={paper} alt="paper image" />
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
  box-sizing: border-box;
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

const PaperImg = styled.img`
  width: 150px;
  height: 150px;
  z-index: 900;
  position: absolute;
  top: 25%;
  right: 30%;
`;
