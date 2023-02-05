import {Typography} from "@mui/material";
import React from "react";

function Videos() {
  const videos = [
    {
      title: "Isolation",
      link: "https://www.youtube.com/embed/8kFYLvi7u0o"
    },
    {
      title: "Freshwater Session",
      link: "https://www.youtube.com/embed/FVeE-bCO3XQ"
    },
    {
      title: "Go There",
      link: "https://www.youtube.com/embed/BlcXgZdIpms"
    },
    {
      title: "Behind The Scenes",
      link: "https://www.youtube.com/embed/VxBGSGYzP8Y"
    },
    {
      title: "Pocket Concerts",
      link: "https://www.youtube.com/embed/i3d9LylY_cc"
    }
  ]

  return (
    <>
      <Typography variant="h1">Videos</Typography>
      {videos.map((data, key) => {
        return (
          <div key={key}
            style={{
              position: 'relative',
              display: 'flex',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              justifyContent: 'center'
            }}
          >
            <iframe
              width="90%" height="90%"
              title={data.title}
              src={data.link}
              style={{
                position: 'absolute'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen />
          </div>
        );
      })}
    </>
  );
}

export default Videos;