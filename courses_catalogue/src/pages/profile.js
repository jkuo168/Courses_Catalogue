import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import ProfileHeader from "../components/profile_header";
import ProfileContent from "../components/profile_content";
import ProfileImage from "../components/profile_image";

const useStyles = makeStyles(() => ({
  catalogue: {
    minWidth: "1700px",
  },
}));

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <div className={classes.catalogue}>
      <ProfileHeader />
      <ProfileImage />
      <ProfileContent />
    </div>
  );
}
