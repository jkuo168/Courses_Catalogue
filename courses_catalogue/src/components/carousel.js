import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import CourseCard from "./course_card";

const useStyles = makeStyles(() => ({
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  all_courses: {
    whiteSpace: "nowrap",
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    width: "90vw",
    marginLeft: "10px",
    marginRight: "10px",
  },
  course: {
    display: "inline-block",
  },
  arrow_buttons: {
    top: "-40px",
  },
}));

export default function Carousel(props) {
  const classes = useStyles();

  const all_courses = <div></div>;

  return (
    <div className={classes.menu}>
      <div>
        <IconButton className={classes.arrow_buttons}>
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </div>
      <div className={classes.all_courses}>{all_courses}</div>
      <div>
        <IconButton className={classes.arrow_buttons}>
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
