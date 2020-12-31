import React from "react";
import styled from "styled-components";
import TradingCard from "./TradingCard";

import { connect } from "react-redux";
import { fetchData } from "../actions";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

class CardList extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderList = () => {
    const { datas } = this.props;
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

  render() {
    return (
      <Wrap>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          //onSlideChange={() => console.log("slide change")}
          //onSwiper={(swiper) => console.log(swiper)}
        >
          {this.renderList()}
        </Swiper>
      </Wrap>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    datas: state.harryReducer.data,
  };
};

export default connect(mapStateToProps, { fetchData })(CardList);

const Wrap = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 1000px;
`;

/* React Hook && Redux 사용시 무한 loop 발생
>> 원인은 최상위 컴포넌트 APP의 <Wrap>에 onMouseMove에 따른
state값이 바뀌어 계속 렌더가 되는 것이었다. */
