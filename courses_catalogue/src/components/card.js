import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import ClassCardDialog from "./dialog";

const useStyles = makeStyles(() => ({
  card: {
    width: "245px",
    height: "260px",
    fontFamily: "Lato",
    fontStyle: "normal",
    borderRadius: "0",
    boxShadow: "none",
    overflow: "visible",
  },
  imgUrl: {
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
  time: {
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    textAlign: "right",
  },
}));

export default function ClassCard(props) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            className={classes.imgUrl}
            component="img"
            image={props.data.imgUrl}
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
            <div className={classes.time}>{props.data.time}</div>
          </div>
        </CardContent>
      </Card>
      <ClassCardDialog setOpen={setOpen} open={open} {...props} />
    </div>
  );
}
