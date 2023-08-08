import { Box, Link, Stack } from '@mui/material';
import React from 'react';
import instagram from '../assets/instagram.svg';
import spotify from '../assets/spotify.svg';
import apple from '../assets/apple-music.svg';
import bandcamp from '../assets/bandcamp.svg';
import paypal from '../assets/paypal.svg';
import venmo from '../assets/venmo.svg';

function Footer() {
  const social = [
    {
      image: instagram,
      link: 'https://www.instagram.com/hockeyteethband/',
    },
    {
      image: spotify,
      link: 'https://open.spotify.com/artist/2Flj4MtGAxNIW1Ahutwa37?si=Rzc-IdzeQvGLkFKLytPU_Q/',
    },
    {
      image: apple,
      link: 'https://music.apple.com/us/artist/hockey-teeth/1529979055',
    },
    {
      image: bandcamp,
      link: 'https://hockeyteeth1.bandcamp.com/',
    },
    {
      image: paypal,
      link: 'https://www.paypal.com/paypalme/hockeyteeth',
    },
    {
      image: venmo,
      link: 'https://account.venmo.com/u/hockey-teeth-merch',
    },
  ];

  return (
    <>
      <Box
        sx={{
          mt: 5,
          mb: 5,
        }}
      >
        <Link
          variant="h3"
          color="inherit"
          href="https://gmail.us5.list-manage.com/subscribe?u=4a374bb0ae22afdfc30d38dce&id=0163152dc3"
          target="_blank"
          rel="noreferrer"
        >
          Join our mailing list!
        </Link>
      </Box>
      <Stack
        className="social"
        direction="row"
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {social.map((data, key) => (
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            key={key}
          >
            <img src={data.image} alt="instagram" />
          </a>
        ))}
      </Stack>
    </>
  );
}

export default Footer;
