import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import CatalogueHeaderImage from "../images/icons.jpg";

const useStyles = makeStyles(() => ({
  paper: {
    backgroundColor: "#038C65",
    position: "relative",
    borderRadius: 0,
  },
  header: {
    display: "block",
    height: "531px",
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
    textDecorationLine: "none",
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  learn: {
    position: "absolute",
    width: "285px",
    height: "36px",
    left: "82px",
    top: "316px",
    fontFamily: "Lustria",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "33px",
    lineHeight: "38px",
    color: "#FFFFFF",
  },
  basics: {
    position: "absolute",
    width: "337px",
    height: "48px",
    left: "82px",
    top: "362px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "19px",
    color: "#FFFFFF",
  },
  learning_button: {
    position: "absolute",
    left: "96px",
    top: "420px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontHeight: "bold",
    fontSize: "16px",
    backgroundColor: "#F29727",
    color: "#FFFFFF",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#F29727",
    },
  },
}));

export default function CatalogueHeader() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <img src={CatalogueHeaderImage} alt="Icons" className={classes.header} />
      <div className={classes.title}>Courses Catalogue</div>
      <Link to="/" className={classes.catalogue_button}>
        Catalogue
      </Link>
      <Link to="/profile" className={classes.profile_button}>
        Profile
      </Link>
      <div className={classes.learn}>Learn UI/UX!</div>
      <div className={classes.basics}>
        Basics of user experience and user interface design in 24 short
        episodes!
      </div>
      <Button className={classes.learning_button}>Start Learning</Button>
    </Paper>
  );
}
