import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FootPrint = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = ref.current;
    const Box = element.children[1];

    gsap.to(Box, {
      scrollTrigger: {
        trigger: Box,
        start: "top 80%",
        end: "bottom 50%",
        markers: true,
        scrub: 1,
        //toggleActions: "restart pause reverse pause",
      },
      x: 1300,
      rotation: 360,
      duration: 3,
    });
  }, []);

  useEffect(() => {
    const element = ref.current;
    const Box = element.children[1];
    const Pan = element.children[2];

    gsap.fromTo(
      Box,
      {
        scrollTrigger: {
          trigger: Pan,
          start: "top 50%",
          end: "bottom 50%",
          markers: true,
          scrub: 1,
          //toggleActions: "restart pause reverse pause",
        },
        x: 1300,
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: Pan,
          start: "top 50%",
          end: "bottom 50%",
          markers: true,
          scrub: 1,
          //toggleActions: "restart pause reverse pause",
        },
        x: 0,
        y: 500,
        rotation: 360,
        duration: 3,
      }
    );

    /*
    gsap.fromTo(
      Box,
      {
        scrollTrigger: {
          trigger: Pan,
          start: "top 50%",
          end: "bottom 50%",
          markers: true,
          scrub: 1,
          //toggleActions: "restart pause reverse pause",
        },
        x: 1300,
        y: 0,
        rotation: 360,
        duration: 3,
      },
      {
        x: 800,
        y: 200,
        rotation: 360,
        duration: 3,
        scrollTrigger: {
          trigger: Pan,
          start: "top 50%",
          end: "bottom 50%",
          markers: true,
          scrub: 1,
          //toggleActions: "restart pause reverse pause",
        },
      }
    );*/
  }, []);

  /*
  gsap.to("Box", {
    scrollTrigger: {
      trigger: "Box",
      start: "top 80%",
      end: "bottom 50%",
      markers: true,
    },
  });*/

  /*
  ScrollTrigger.create({
    trigger: "Box",
    start: "top 80%",
    end: "top 50%",
  });
*/

  return (
    <Wrap ref={ref}>
      <Panel></Panel>
      <Box></Box>
      <Panel></Panel>
    </Wrap>
  );
};

export default FootPrint;

const Wrap = styled.div`
  margin: 0;
`;

const Panel = styled.div`
  height: 100vh;
  background-color: beige;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  position: relative;
  box-sizing: border-box;
`;

const BoxRed = styled.div`
  background-color: red;
`;

/*
  gsap.to("Img", {
    scrollTrigger: {
      trigger: "Img",
      start: "20px 80%",
      end: "bottom 100px",
      markers: true,
      scrub: 1,
      //toggleActions: "restart pause reverse pause",
    },
    x: 1300,
    //rotation: 360,
    duration: 3,
  });
*/
