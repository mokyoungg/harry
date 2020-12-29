import React, { useState, useEffect } from "react";
import TradingCard from "./TradingCard";
import styled from "styled-components";
import mockData from "../apis/mockData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const CardList = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await mockData.get();
    setData(response.data.data);
  };

  const renderList = () => {
    if (!datas) {
      return null;
    } else {
      return datas.map((data, key) => {
        return (
          <SwiperSlide>
            <TradingCard data={data} key={data.id} />
          </SwiperSlide>
        );
      });
    }
  };

  return (
    <Wrap>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        //onSlideChange={() => console.log("slide change")}
        //onSwiper={(swiper) => console.log(swiper)}
      >
        {renderList()}
      </Swiper>
    </Wrap>
  );
};

export default CardList;

const Wrap = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 1000px;
`;
