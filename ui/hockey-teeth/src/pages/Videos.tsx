import React from 'react';
import { Box, Typography } from '@mui/material';
import { cardSx } from '../theme/tokens';
import LiteYouTube from '../components/LiteYouTube';
import Reveal from '../components/Reveal';

const videos = [
  { title: 'Why Do We Fret? (Official Music Video)', id: 'kFuGYzCTbsU' },
  { title: 'On/Off & The Seasons - Live at Capitol Hill Block Party', id: 'HtoBx0r1PLI' },
  { title: 'Big Red (Live on Art Zone)', id: 'kbU2WG9gzSs' },
  { title: 'Food for Thought', id: 'oM4hGOilvFk' },
  { title: 'Big Red (Live at The Sunset Tavern)', id: 'JcHOBLHW9HY' },
  { title: 'Tired Of Being Tough', id: '0ip_Mz7b0NM' },
  { title: 'Big Red (Live)', id: 'Uw29IU4BR-s' },
  { title: 'Roll Up', id: 'FnDCfOJUN0g' },
  { title: 'Sick Of Me', id: 'c-3rrAArNFU' },
  { title: 'KSPU Session', id: 'tUz4Hmn6lAI' },
  { title: 'Freshwater Session', id: 'FVeE-bCO3XQ' },
  { title: 'Isolation', id: '8kFYLvi7u0o' },
  { title: 'Go There', id: 'BlcXgZdIpms' },
  { title: 'Behind The Scenes', id: 'VxBGSGYzP8Y' },
  { title: 'Pocket Concerts', id: 'i3d9LylY_cc' },
];

function Videos() {
  return (
    <Box
      component="ul"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
        gap: 6,
        listStyle: 'none',
        p: 0,
        mt: 3,
        mb: 12,
      }}
    >
      {videos.map((video) => (
        <li key={video.id}>
          <Reveal>
            <Box sx={{ ...cardSx, p: 2 }}>
              <LiteYouTube videoId={video.id} title={video.title} />
              <Typography variant="cardTitle" component="h2" sx={{ px: 2, pt: 3, pb: 2 }}>
                {video.title}
              </Typography>
            </Box>
          </Reveal>
        </li>
      ))}
    </Box>
  );
}

export default Videos;
