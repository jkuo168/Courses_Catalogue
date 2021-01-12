import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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
  const recently_watched_courses = [
    {
      id: "1",
      subject: "Social Sciences",
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      imgUrl:
        "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
      viewCount: 0,
      time: "5h 24m",
    },
    {
      id: "2",
      subject: "Social Sciences",
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      imgUrl:
        "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
      viewCount: 0,
      time: "5h 24m",
    },
    {
      id: "3",
      subject: "Social Sciences",
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      imgUrl:
        "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
      viewCount: 0,
      time: "5h 24m",
    },
    {
      id: "4",
      subject: "Social Sciences",
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      imgUrl:
        "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
      viewCount: 0,
      time: "5h 24m",
    },
    {
      id: "5",
      subject: "Social Sciences",
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      imgUrl:
        "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
      viewCount: 0,
      time: "5h 24m",
    },
    {
      id: "6",
      subject: "Social Sciences",
      title: "Microecomonics 101",
      description: "Introductory course in Microecomonics",
      author: "Jane Doe",
      imgUrl:
        "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
      viewCount: 0,
      time: "5h 24m",
    },
  ];

  return (
    <Paper>
      <div className={classes.recently_watched_text}>Recently Watched</div>
      <div className={classes.recently_watched_courses}>
        <Carousel data={recently_watched_courses} />
      </div>
    </Paper>
  );
}
