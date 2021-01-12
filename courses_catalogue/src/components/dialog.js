import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  title: {
    position: "absolute",
    width: "295px",
    height: "63px",
    left: "58px",
    top: "65px",
    fontFamily: "Lustria",
    fontStyle: "normal",
    fontHeight: "normal",
    fontSize: "30px",
    lineHeight: "38px",
    color: "white",
  },
  close_button: {
    position: "absolute",
    right: 0,
    color: "white",
    margin: "10px",
  },
  img: {
    position: "absolute",
    width: "524px",
    height: "350px",
    left: "58px",
    top: "128px",
  },
  info: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontHeight: "normal",
    fontSize: "20px",
    lineHeight: "24px",
    color: "white",
  },
  author: {
    position: "absolute",
    left: "58px",
    top: "501px",
  },
  viewCount: {
    position: "absolute",
    left: "58px",
    top: "537px",
  },
  time: {
    position: "absolute",
    left: "514px",
    top: "537px",
  },
  description: {
    position: "absolute",
    width: "275px",
    left: "633px",
    top: "128px",
    lineHeight: "24px",
  },
}));

export default function ClassCardDialog(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Dialog
      className={classes.dialog}
      open={props.open}
      maxWidth={"xl"}
      PaperProps={{
        style: {
          borderRadius: "20px",
          backgroundColor: "#038C65",
          color: "white",
          width: "955px",
          height: "608px",
        },
      }}
    >
      <IconButton className={classes.close_button} onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <div className={classes.title}>{props.data.title}</div>
        <div className={classes.info}>
          <img className={classes.img} src={props.data.imageUrl} alt=""></img>
          <div className={classes.author}>By: {props.data.author}</div>
          <div className={classes.viewCount}>
            {props.data.viewCount + props.count} views
          </div>
          <div className={classes.time}>{props.data.time}</div>
          <div className={classes.description}>{props.data.description}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
