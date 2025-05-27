import { Typography } from '@mui/material';
import React from 'react';

function Videos() {
  return (
    <>
      <Typography variant="h3">Food for Thought (Live on Art Zone)</Typography>
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
          title="Food for Thought Live"
          src="https://www.youtube.com/embed/kbU2WG9gzSs"
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
