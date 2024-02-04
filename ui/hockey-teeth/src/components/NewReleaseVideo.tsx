import { Typography } from '@mui/material';
import React from 'react';

function Videos() {
  return (
    <>
      <Typography variant="h1">Big Red (Live) Out Now!</Typography>
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
          title="Sick Of Me"
          src="https://www.youtube.com/embed/Uw29IU4BR-s"
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
