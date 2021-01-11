import React from "react";
import Paper from "@material-ui/core/Paper";

import ProfileHeaderImage from "../images/princeton_tiger.jpg";

export default function ProfilePage() {
  return (
    <Paper>
      <img src={ProfileHeaderImage} />
    </Paper>
  );
}
