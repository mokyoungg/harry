import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const TradingCard = ({ data }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="img"
          image={data.image}
          object-fit="fill"
          height="500px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.ename}
          </Typography>
          <QuotesWrap>{data.quotes}</QuotesWrap>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setIsOpen(true)}>
          Trailer
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} data={data} />
    </Card>
  );
};

export default TradingCard;

const QuotesWrap = styled.p`
  height: 100px;
  overflow: scroll;
  margin-bottom: -30px;
  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;
