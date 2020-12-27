import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import TradingCard from "./TradingCard";

import styled from "styled-components";

import jsonData from "../apis/jsonData";

const CardList = () => {
  const settings = {
    //dots: true,
    //infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await jsonData.get();
    setData(response.data.data);
  };

  console.log(data);
  return (
    <Wrap>
      <Slider {...settings}>
        {data.map((data) => {
          return <TradingCard data={data} />;
        })}
      </Slider>
    </Wrap>
  );
};

export default CardList;

const Wrap = styled.div`
  width: 1000px;
`;
