import React from "react";
import styled from "styled-components";

import SwiperCore, { Autoplay, EffectFlip } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/effect-flip/effect-flip.scss";

SwiperCore.use([Autoplay, EffectFlip]);

const Portrait = () => {
  return (
    <Swiper effect="flip">
      <SwiperSlide>
        <Img src="https://pds.joins.com/news/component/htmlphoto_mmdata/200608/htm_20060824163946c000c010-001.JPG" />
      </SwiperSlide>
      <SwiperSlide>
        <Img src="https://i.pinimg.com/originals/48/c2/9e/48c29eb10f3bfa855f657bab08e25126.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Portrait;

const Img = styled.img`
  width: 100%
  object-fit: fill;
`;
