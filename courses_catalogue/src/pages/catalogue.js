import React from "react";
import Paper from "@material-ui/core/Paper";

import CatalogueHeaderImage from "../images/icons.jpg";

export default function CataloguePage() {
  return (
    <Paper>
      <img src={CatalogueHeaderImage} alt="Icons" />
    </Paper>
  );
}
