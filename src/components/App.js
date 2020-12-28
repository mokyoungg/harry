import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import CardList from "./CardList";
import styled from "styled-components";

const App = () => {
  return (
    <Wrap>
      <ContentWrap>
        <Video />
        <SearchBar />
      </ContentWrap>
      <CardList />
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
