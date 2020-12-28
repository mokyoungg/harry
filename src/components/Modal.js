import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";

const Modal = ({ open, onClose, data }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Wrap>
      <Content>
        <ReactPlayer
          url={data.trailer}
          playing={true}
          width="1300px"
          height="600px"
        />
      </Content>
      <ButtonWrap>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </ButtonWrap>
    </Wrap>,
    document.querySelector("#modal")
  );
};

export default Modal;

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 7);
  z-index: 1000;
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ButtonWrap = styled.div``;
