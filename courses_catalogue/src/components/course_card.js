import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import axios from "../axios";
import CourseCardDialog from "./dialog";

const useStyles = makeStyles(() => ({
  card: {
    width: "245px",
    height: "260px",
    fontFamily: "Lato",
    fontStyle: "normal",
    borderRadius: "0",
    boxShadow: "none",
    overflow: "visible",
    marginRight: "54px",
  },
  img: {
    border: "1px solid #038C65",
  },
  card_content: {
    paddingLeft: "5px",
    paddingRight: "0px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "20px",
  },
  author: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
  },
  inline: {
    display: "flex",
  },
  viewCount: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
  },
  flex: {
    flexGrow: "1",
  },
  duration: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "right",
  },
}));

export default function CourseCard(props) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.img}
            component="img"
            image={props.data.imageUrl}
          />
        </CardActionArea>
        <CardContent className={classes.card_content}>
          <div className={classes.title}>{props.data.title}</div>
          <div className={classes.author}>{props.data.author}</div>
          <div className={classes.inline}>
            <div className={classes.viewCount}>
              {props.data.viewCount} views
            </div>
            <div className={classes.flex} />
            <div className={classes.duration}>{props.data.duration}</div>
          </div>
        </CardContent>
      </Card>
      <CourseCardDialog setOpen={setOpen} open={open} {...props} />
    </div>
  );
}
