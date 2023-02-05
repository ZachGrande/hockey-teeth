import React from "react";
import ShowList from "../components/ShowList/ShowList";
import {Typography} from "@mui/material";

interface IShowsProps {
  title: string;
  data: object;
}
function Shows({ title, data }: IShowsProps) {
  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <br />
      <ShowList shows={data} />
      <br />
    </div>
  );
}

export default Shows;