import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "./carousel.js";

const useStyles = makeStyles(() => ({
  catalogue_content: {
    //padding: "20px",
  },
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
    width: "1321px",
    height: "240px",
    left: "82px",
    top: "639px",
  },
  design_carousel: {
    position: "absolute",
    width: "1296px",
    height: "240px",
    left: "82px",
    top: "985px",
  },
}));

export default function CatalogueContent() {
  const classes = useStyles();
  const social_science_classes = {
    subject: "Social Sciences",
    title: "Microecomonics 101",
    description: "Introductory course in Microecomonics",
    author: "Jane Doe",
    imgUrl:
      "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
    viewCount: 0,
    time: "5h 24m",
  };
  const design_classes = {
    subject: "Social Sciences",
    title: "Microecomonics 101",
    description: "Introductory course in Microecomonics",
    author: "Jane Doe",
    imgUrl:
      "https://www.finance-watch.org/wp-content/uploads/2018/08/money-supply-1600x1067.jpg",
    viewCount: 0,
    time: "5h 24m",
  };

  return (
    <Paper className={classes.catalogue_content}>
      <div className={classes.social_sciences}>Social Sciences</div>
      <div className={classes.social_science_carousel}>
        <Carousel data={social_science_classes} />
      </div>
      <div className={classes.design}>Design</div>
      <div className={classes.design_carousel}>
        <Carousel data={design_classes} />
      </div>
    </Paper>
  );
}
