import React from "react";
import CatalogueHeader from "../components/catalogue_header";
import CatalogueContent from "../components/catalogue_content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  catalogue: {
    minWidth: "1700px",
  },
}));

export default function CataloguePage() {
  const classes = useStyles();

  return (
    <div className={classes.catalogue}>
      <CatalogueHeader />
      <CatalogueContent />
    </div>
  );
}
