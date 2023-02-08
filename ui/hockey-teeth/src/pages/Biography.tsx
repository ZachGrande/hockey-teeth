import React from "react";
import {ImageList, ImageListItem, Link, Typography} from "@mui/material";
import {biography} from "../data/Biography";
import bamf from "../assets/band-photos/bamf.png";
import photo1 from "../assets/band-photos/band-01.png";
import photo2 from "../assets/band-photos/band-02.png";
import photo3 from "../assets/band-photos/band-03.png";
import photo4 from "../assets/band-photos/band-04.png";
import photo5 from "../assets/band-photos/band-05.png";
import photo6 from "../assets/band-photos/band-06.png";

function Biography() {
  const images = [
    {
      title: "Photo 1",
      image: photo1,
      cols: 2,
      rows: 1,
      width: "10px"
    },
    {
      title: "Photo 2",
      image: photo2,
      cols: 2,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 3",
      image: photo3,
      cols: 2,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 4",
      image: photo4,
      cols: 1,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 5",
      image: photo5,
      cols: 1,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 6",
      image: photo6,
      cols: 2,
      rows: 1,
      width: "64px"
    },
  ]

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
      <br />
      <Typography variant="h3">
        About Hockey Teeth
      </Typography>
      <Typography variant="body1" sx={{ margin: 5 }}>
        {biography.bio}
      </Typography>
      <ImageList
        sx={{
          margin: 5,
        }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {images.map((item) => (
          <ImageListItem
            key={item.image}
            cols={item.cols || 1}
            rows={item.rows || 1}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
          />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography variant="h3">
        Contact Info
      </Typography>
      <Typography variant="body1" sx={{ margin: 5 }}>
        For booking requests, please email us at
        <br />
        <Link variant="body1" color="inherit" href="mailto: hockeyteethband@gmail.com"
              target="_blank"
              rel="noreferrer">
          hockeyteethband@gmail.com
        </Link>
      </Typography>
    </>
  );
}

export default Biography;