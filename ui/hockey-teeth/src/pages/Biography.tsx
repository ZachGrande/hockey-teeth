import React from "react";
import {Link, Typography} from "@mui/material";
import {biography} from "../data/Biography";
import bamf from "../assets/bamf.jpeg";

function Biography() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          height: '35vh',
          overflow: 'hidden',
          justifyContent: 'center',
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <img src={bamf} alt="bamf" />
      </div>
      <Typography variant="body1">
        Hockey Teeth at BAMF! in August 2022.
      </Typography>
      <Link
        variant="body1"
        color="inherit"
        href="https://www.instagram.com/scottstarkphoto/"
        target="_blank"
        rel="noreferrer"
      >
        Photo courtesy of @scottstarkphoto.
      </Link>
      <br />
      <Typography variant="h3">
        About Hockey Teeth
      </Typography>
      <Typography variant="body1">
        {biography.bio}
      </Typography>
    </>
  );
}

export default Biography;