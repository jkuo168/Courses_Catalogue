import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Carousel from "./carousel.js";

// IMPORT AXIOS
const useStyles = makeStyles(() => ({
  social_sciences: {
    width: "327px",
    position: "absolute",
    height: "36px",
    left: "82px",
    top: "581px",
    fontFamily: "Lustria",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "38px",
    color: "#038C65",
  },
  design: {
    position: "absolute",
    width: "327px",
    height: "36px",
    left: "82px",
    top: "919px",
    fontFamily: "Lustria",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "38px",
    color: "#038C65",
  },
  social_science_carousel: {
    position: "absolute",
    width: "90vw",
    left: "82px",
    top: "639px",
    overflowX: "scroll",
    overflowY: "hidden",
  },
  design_carousel: {
    position: "absolute",
    width: "90vw",
    left: "82px",
    right: "82px",
    top: "985px",
    overflowX: "scroll",
    overflowY: "hidden",
  },
}));

export default function CatalogueContent() {
  const classes = useStyles();
  const [social_science_courses, setSocialScienceCourses] = useState([]);
  const [design_courses, setDesignCourses] = useState([]);

  useEffect(() => {
    // MAKE AXIOS CALLS
    // GET SOCIAL SCIENCE COURSES
    // GET DESIGN COURSES
  }, []);

  return (
    <Paper>
      <div className={classes.social_sciences}>Social Sciences</div>
      <div className={classes.social_science_carousel}>
        <Carousel data={social_science_courses} />
      </div>
      <div className={classes.design}>Design</div>
      <div className={classes.design_carousel}>
        <Carousel data={design_courses} />
      </div>
    </Paper>
  );
}
