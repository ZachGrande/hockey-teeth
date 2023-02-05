import React from "react";
import {Grid, Stack} from "@mui/material";

function Music() {
  return (
    <>
    <Stack spacing={2}>
      <Grid item xs={6}>
        <iframe style={{
                  borderRadius: "12px"
                }}
                src="https://open.spotify.com/embed/album/3M4Al1R2VKqZyARSmnnnA3?utm_source=generator"
                width="90%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" />
      </Grid>
      <Grid item xs={6}>
        <iframe style={{
                  borderRadius: "12px"
                }}
                src="https://open.spotify.com/embed/album/6FHDPRswuYZTjgWlE92GKB?utm_source=generator"
                width="90%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" />
      </Grid>
      <Grid item xs={6}>
        <iframe style={{
                  borderRadius: "12px"
                }}
                src="https://open.spotify.com/embed/album/3aHOEbn6pnehWmSSbui41f?utm_source=generator"
                width="90%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" />
      </Grid>
    </Stack>
    </>
  );
}

export default Music;