import {Typography} from "@mui/material";
import React from "react";

function Videos() {
  return (
    <>
      <Typography variant="h1">Videos</Typography>
      <div
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
          title="Isolation"
          src="https://www.youtube.com/embed/8kFYLvi7u0o"
          style={{
            position: 'absolute'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen />
      </div>
    </>
  );
}

export default Videos;