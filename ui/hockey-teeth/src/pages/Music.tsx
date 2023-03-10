import React from "react";
import {Grid, ImageListItem, Link, Stack, Typography} from "@mui/material";
import sickOfMe from '../assets/album-covers/sick-of-me.png';
import isolation from '../assets/album-covers/isolation.png';
import goThere from '../assets/album-covers/go-there.png';
import edelweiss from '../assets/album-covers/edelweiss.png';
import apt from '../assets/album-covers/apt.png';

function Music() {
  const albumCovers = [
    {
      title: "Sick Of Me",
      image: sickOfMe,
      link: "https://open.spotify.com/album/3M4Al1R2VKqZyARSmnnnA3?si=OpoCkQ1rS1ikAI-wFX7p4Q"
    },
    {
      title: "Isolation",
      image: isolation,
      link: "https://open.spotify.com/album/6FHDPRswuYZTjgWlE92GKB?si=wttIz5MURbuAvoBTwFtFWw"
    },
    {
      title: "Go There",
      image: goThere,
      link: "https://open.spotify.com/album/3aHOEbn6pnehWmSSbui41f?si=mfYcGhnMQdyLaVZAC77Z4A"
    },
    {
      title: "Edelweiss",
      image: edelweiss,
      link: "https://open.spotify.com/album/74Qi9mrHRNBcQiwsMstymN?si=szrnb83HS2CxioR8fMZ4Gg"
    },
    {
      title: "Apt",
      image: apt,
      link: "https://open.spotify.com/album/1wI8wJu5xP8R52Y4oITx7s?si=8SXZACKzSwmZb7Sbnnm-jA"
    }
  ]
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
      <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
        Discography
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent={"center"}
            alignItems={"center"}>
        {albumCovers.map((item) => (
          <Grid item xs={2} sm={4} md={4}
                key={item.title}>
            <Link href={item.link}
               target="_blank"
               rel="noreferrer">
              <ImageListItem>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Music;