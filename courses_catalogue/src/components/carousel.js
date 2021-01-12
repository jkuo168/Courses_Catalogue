import React, { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import ClassCard from "./card";

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
    width: "1500px",
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

  const navRef = createRef();

  const all_courses =
    props.data &&
    props.data.map((course) => {
      return (
        <div className={classes.course} key={course._id}>
          <ClassCard data={course} />
        </div>
      );
    });

  const handleNav = (direction) => {
    if (direction === "left") {
      if (navRef) {
        return (navRef.current.scrollLeft -= 200);
      } else {
        return null;
      }
    } else {
      if (navRef) {
        return (navRef.current.scrollLeft += 200);
      } else {
        return null;
      }
    }
  };

  return (
    <div className={classes.menu}>
      <div>
        <IconButton
          className={classes.arrow_buttons}
          onClick={() => handleNav("left")}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </div>
      <div className={classes.all_courses} ref={navRef}>
        {all_courses}
      </div>
      <div>
        <IconButton
          className={classes.arrow_buttons}
          onClick={() => handleNav("right")}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </div>
    </div>
  );
}
