import React from 'react';
import {
  Grid, ImageListItem, Link, Stack, Typography,
} from '@mui/material';

function Music() {
  const albumCovers = [
    {
      title: 'Cut Your Teeth',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/cut-your-teeth.webp',
      link: 'https://open.spotify.com/album/2FL9mG9WCeyVgH1cT3Jcgj?si=ao1Bed4lSwW1krSMmIyQJA',
    },
    {
      title: 'Food for Thought',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/food-for-thought.webp',
      link: 'https://open.spotify.com/album/7hsBXKtZ30cQKTj8AUEc2C?si=e8oVNa8xT12D-WyIgPZEng',
    },
    {
      title: 'Tired of Being Tough',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/tired-of-being-tough.webp',
      link: 'https://open.spotify.com/album/18BTO15qtw5XmgxYxHCXCF?si=l_RRyeBrRaqFx9aflFYIgg',
    },
    {
      title: 'Big Red',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/big-red.webp',
      link: 'https://open.spotify.com/album/5SyI4HOtaQtAC9WMdoMbdi?si=D5feRBLFSeGRBwwjI3lMgg',
    },
    {
      title: 'Start and Delay',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/start-and-delay.webp',
      link: 'https://open.spotify.com/album/7LNvirnCmKhcQ5583y9nYQ?si=EV7wAiOzT8GaT7WnmMuYkQ',
    },
    {
      title: 'Dialtone',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/dialtone.webp',
      link: 'https://open.spotify.com/album/30yf09Y0X0GLDLQ6HiXP9z?si=j-tjTXdRREKCFI9Tv79mmA',
    },
    {
      title: 'Sick Of Me',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/sick-of-me.webp',
      link: 'https://open.spotify.com/album/3M4Al1R2VKqZyARSmnnnA3?si=OpoCkQ1rS1ikAI-wFX7p4Q',
    },
    {
      title: 'Isolation',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/isolation.webp',
      link: 'https://open.spotify.com/album/6FHDPRswuYZTjgWlE92GKB?si=wttIz5MURbuAvoBTwFtFWw',
    },
    {
      title: 'Go There',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/go-there.webp',
      link: 'https://open.spotify.com/album/3aHOEbn6pnehWmSSbui41f?si=mfYcGhnMQdyLaVZAC77Z4A',
    },
    {
      title: 'Edelweiss',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/edelweiss.webp',
      link: 'https://open.spotify.com/album/74Qi9mrHRNBcQiwsMstymN?si=szrnb83HS2CxioR8fMZ4Gg',
    },
    {
      title: 'Apt',
      image: 'https://d19uxx92abk94f.cloudfront.net/album-covers/apt.webp',
      link: 'https://open.spotify.com/album/1wI8wJu5xP8R52Y4oITx7s?si=8SXZACKzSwmZb7Sbnnm-jA',
    },
  ];
  return (
    <>
      <Stack spacing={2}>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/2FL9mG9WCeyVgH1cT3Jcgj?utm_source=generator"
            title="Cut Your Teeth"
            width="90%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/7hsBXKtZ30cQKTj8AUEc2C?utm_source=generator"
            title="Food for Thought"
            width="90%"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/18BTO15qtw5XmgxYxHCXCF?utm_source=generator"
            title="Tired Of Being Tough"
            width="90%"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/track/1fiXIA7GMOswDQmbgEQ6lr?utm_source=generator"
            title="Big Red"
            width="90%"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/7LNvirnCmKhcQ5583y9nYQ?utm_source=generator"
            title="Start and Delay"
            width="90%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/track/2GSXrzXjzqgy9sIAl9cjKS?utm_source=generator"
            title="Dialtone"
            width="90%"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/3M4Al1R2VKqZyARSmnnnA3?utm_source=generator"
            title="Sick Of Me"
            width="90%"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/6FHDPRswuYZTjgWlE92GKB?utm_source=generator"
            title="Isolation"
            width="90%"
            height="152"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <iframe
            style={{
              borderRadius: '12px',
              border: '0px',
            }}
            src="https://open.spotify.com/embed/album/3aHOEbn6pnehWmSSbui41f?utm_source=generator"
            title="Go There"
            width="90%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Grid>
      </Stack>
      <Typography variant="h3" sx={{ mt: 2, mb: 2 }}>
        Discography
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        {albumCovers.map((item) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={item.title}
          >
            <Link
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
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
