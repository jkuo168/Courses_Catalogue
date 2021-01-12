import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import axios from "../axios";
import Carousel from "./carousel.js";

const useStyles = makeStyles(() => ({
  recently_watched_text: {
    position: "absolute",
    width: "257px",
    height: "38px",
    left: "99px",
    top: "489px",
    fontFamily: "Lustria",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    lineHeight: "38px",
    color: "#038C65",
  },
  recently_watched_courses: {
    position: "absolute",
    width: "1600px",
    height: "230px",
    left: "99px",
    top: "549px",
  },
}));

export default function ProfileContent() {
  const classes = useStyles();
  const [recently_watched_courses, setRecentlyWatchedCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/courses").then((res) => {
      setRecentlyWatchedCourses(res.data);
      return;
    });
  }, []);

  return (
    <Paper>
      <div className={classes.recently_watched_text}>Recently Watched</div>
      <div className={classes.recently_watched_courses}>
        <Carousel data={recently_watched_courses} />
      </div>
    </Paper>
  );
}
