import React from 'react';
import { Box, Typography } from '@mui/material';
import instagram from '../assets/instagram.svg';
import spotify from '../assets/spotify.svg';
import apple from '../assets/apple-music.svg';
import bandcamp from '../assets/bandcamp.svg';
import paypal from '../assets/paypal.svg';
import venmo from '../assets/venmo.svg';
import { mailingListUrl } from '../data/navigation';
import { cardSx, focusRing, retroStep } from '../theme/tokens';
import PillLink from './PillLink';

const social = [
  {
    name: 'Instagram',
    image: instagram,
    link: 'https://www.instagram.com/hockeyteethband/',
  },
  {
    name: 'Spotify',
    image: spotify,
    link: 'https://open.spotify.com/artist/2Flj4MtGAxNIW1Ahutwa37?si=Rzc-IdzeQvGLkFKLytPU_Q/',
  },
  {
    name: 'Apple Music',
    image: apple,
    link: 'https://music.apple.com/us/artist/hockey-teeth/1529979055',
  },
  {
    name: 'Bandcamp',
    image: bandcamp,
    link: 'https://hockeyteeth1.bandcamp.com/',
  },
  {
    name: 'PayPal',
    image: paypal,
    link: 'https://www.paypal.com/paypalme/hockeyteeth',
  },
  {
    name: 'Venmo',
    image: venmo,
    link: 'https://account.venmo.com/u/hockey-teeth-merch',
  },
];

function Footer() {
  return (
    <Box component="footer" sx={{ pt: 2, pb: 10 }}>
      <Box sx={{
        ...cardSx, maxWidth: 400, mx: 'auto', p: 5,
      }}
      >
        <Typography variant="cardTitle" component="p">
          Join our mailing list!
        </Typography>
        <Typography variant="meta" sx={{ mt: 1, mb: 4 }}>
          Be the first to hear about new shows and music.
        </Typography>
        <PillLink tone="pink" block href={mailingListUrl} target="_blank" rel="noopener noreferrer">
          Sign me up
        </PillLink>
      </Box>
      <Box
        component="ul"
        aria-label="Hockey Teeth elsewhere"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          listStyle: 'none',
          p: 0,
          mt: 10,
          mb: 0,
        }}
      >
        {social.map((data) => (
          <li key={data.name}>
            <Box
              component="a"
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.name}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: '10px',
                transition: `transform 160ms ${retroStep}`,
                '&:hover': { transform: 'translateY(-3px)' },
                ...focusRing,
              }}
            >
              <img src={data.image} alt="" style={{ height: 30, maxWidth: 34 }} />
            </Box>
          </li>
        ))}
      </Box>
    </Box>
  );
}

export default Footer;
