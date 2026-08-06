import { Typography } from '@mui/material';
import React from 'react';

function Videos() {
  return (
    <>
      <Typography variant="h3">Why Do We Fret? (Official Music Video)</Typography>
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
          title="Why Do We Fret?"
          src="https://www.youtube.com/embed/kFuGYzCTbsU"
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
