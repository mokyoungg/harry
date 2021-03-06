import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { chantSpell } from "../actions";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: `center`,
    alignItems: "center",
  },
});

const SearchBar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [spell, setSpell] = useState("");

  const inputHandler = (e) => {
    if (e.target.value === "볼드모트") {
      setSpell(e.target.value);
      setTimeout(() => {
        setSpell("그 이름을 말해선 안 돼");
      }, 2000);
    } else {
      setSpell(e.target.value);
    }
  };

  const keyPressHandler = (e) => {
    if (e.keyCode === 13 || e.keyCode === 8) {
      dispatch(chantSpell(spell));
    }
  };

  return (
    <Wrap value={spell}>
      <Container className={classes.container}>
        <TextField
          id="standard-basic"
          label="Chant Spell"
          onChange={inputHandler}
          onKeyDown={keyPressHandler}
          value={spell}
        />
      </Container>
    </Wrap>
  );
};

export default SearchBar;

const voldmort = keyframes`
  0%, 50% {
    transform: rotate(0deg)
  }
  5%, 15%, 25%, 35%, 45% {
    transform: rotate(10deg)
  }
  10%, 20%, 30%, 40% {
    transform: rotate(-10deg)
  }
`;

const Wrap = styled.div`
  ${(props) => {
    if (props.value === "볼드모트") {
      return css`
        animation: ${voldmort} 2s linear infinite;
      `;
    } else if (props.value === "그 이름을 말해선 안 돼") {
      return css`
        animation: ${voldmort} 2s linear infinite;
        border: 2px solid red;
      `;
    }
  }};
`;
