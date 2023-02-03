import React from "react";
import ShowList from "../components/ShowList";
import {Typography} from "@mui/material";

function Shows() {
  return (
    <div>
      <Typography variant="h1">Upcoming Shows</Typography>
      <br />
      <ShowList />
      <br />
    </div>
  );
}

export default Shows;