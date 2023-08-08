import React from "react";
import ShowList from "../components/ShowList";
import {ShowType} from "../data/Shows.types";
import {Typography} from "@mui/material";

interface IShowsProps {
  title: string;
  data: ShowType[];
}
function Shows({ title, data }: IShowsProps) {
  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <br />
      <ShowList shows={data} />
    </div>
  );
}

export default Shows;