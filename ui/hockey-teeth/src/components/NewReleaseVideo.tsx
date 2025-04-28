import { Typography } from '@mui/material';
import React from 'react';

function Videos() {
  return (
    <>
      <Typography variant="h1">Big Red (Live at The Sunset Tavern)</Typography>
      <br />
      <div style={{
        position: 'relative',
        display: 'flex',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        justifyContent: 'center',
      }}
      >
        <iframe
          width="90%"
          height="90%"
          title="Big Red Live"
          src="https://www.youtube.com/embed/JcHOBLHW9HY"
          style={{
            position: 'absolute',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  );
}

export default Videos;
