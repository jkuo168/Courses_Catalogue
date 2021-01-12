import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import ProfileHeaderImage from "../images/princeton_tiger.jpg";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#038C65",
    position: "relative",
    borderRadius: 0,
  },
  header: {
    display: "block",
    height: "288px",
    objectFit: "cover",
    opacity: "30%",
    width: "100%",
  },
  title: {
    position: "absolute",
    height: "45px",
    left: "44px",
    top: "42px",
    fontFamily: "Lustria",
    color: "white",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "40px",
    lineHeight: "32px",
  },
  catalogue_button: {
    position: "absolute",
    width: "67px",
    height: "18px",
    right: "10%",
    top: "42px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "18px",
    textAlign: "right",
    textTransform: "none",
    color: "white",
    textDecorationLine: "none",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  profile_button: {
    position: "absolute",
    width: "43px",
    height: "18px",
    right: "5%",
    top: "42px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "18px",
    textAlign: "center",
    color: "white",
    textTransform: "none",
    textDecorationLine: "underline",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
}));

export default function ProfileHeader() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <img src={ProfileHeaderImage} alt="Icons" className={classes.header} />
      <div className={classes.title}>Courses Catalogue</div>
      <Link to="/" className={classes.catalogue_button}>
        Catalogue
      </Link>
      <Link to="/profile" className={classes.profile_button}>
        Profile
      </Link>
    </Paper>
  );
}
