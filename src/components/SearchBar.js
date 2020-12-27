import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: `center`,
    alignItems: "center",
    width: "300px",
    border: "1px solid blue",
  },
});

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TextField id="standard-basic" label="Search" />
    </Container>
  );
};

export default SearchBar;
