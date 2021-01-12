import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ProfilePicture from "../images/profile_image.jpg";

const useStyles = makeStyles(() => ({
  img: {
    position: "fixed",
    width: "212px",
    height: "212px",
    borderRadius: "50%",
    objectFit: "cover",
    left: "50%",
    transform: "translate(-50%, -50%);",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  name: {
    position: "fixed",
    left: "50%",
    transform: "translate(-50%, -50%);",
    width: "124px",
    height: "38px",
    top: "412px",
    fontFamily: "Lustria",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "38px",
    textAlign: "center",
    marginTop: "10px",
    color: "#038C65",
  },
}));

export default function ProfileImage() {
  const classes = useStyles();

  return (
    <div>
      <img className={classes.img} src={ProfilePicture} alt=""></img>
      <div className={classes.name}>Jane Doe</div>
    </div>
  );
}
