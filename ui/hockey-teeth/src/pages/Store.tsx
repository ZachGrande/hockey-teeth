import React from 'react';
import {
  Grid,
  Typography,
  Stack,
} from '@mui/material';
import StoreItemCard from '../components/StoreItemCard';
import type { StoreItem } from '@/types/store';

const items: StoreItem[] = [
  {
    title: 'Red Ringer License Plate Tee',
    description: 'Red Ringer License Plate Tee',
    image: 'https://f4.bcbits.com/img/0041116087_36.jpg',
    link: 'https://hockeyteeth1.bandcamp.com/merch/red-ringer-license-plate-tee',
  },
  {
    title: 'Cut Your Teeth',
    description: 'Cut Your Teeth (Album)',
    image: 'https://f4.bcbits.com/img/a2214400431_16.jpg',
    link: 'https://hockeyteeth1.bandcamp.com/album/cut-your-teeth',
  },
  {
    title: 'Food for Thought',
    description: 'Food for Thought (Single)',
    image: 'https://f4.bcbits.com/img/a0960358708_10.jpg',
    link: 'https://hockeyteeth1.bandcamp.com/track/food-for-thought',
  },
];

function Store() {
  return (
    <Stack spacing={6} sx={{ mt: 2, mb: 10 }}>
      <Grid
        container
        rowSpacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {items.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            key={`${item.title}-${item.link}`}
            sx={{ px: { md: 1.5 } }}
          >
            <StoreItemCard
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="body2"
        sx={{
          opacity: 0.7,
        }}
      >
        Purchases and streaming are handled securely on Bandcamp.
      </Typography>
    </Stack>
  );
}

export default Store;
