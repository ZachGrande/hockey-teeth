import React from 'react';
import { Box } from '@mui/material';
import { cardSx } from '../theme/tokens';
import LiteYouTube from './LiteYouTube';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

function NewReleaseVideo() {
  return (
    <Box
      component="section"
      aria-labelledby="video-title"
      sx={{ maxWidth: 640, mx: 'auto', mb: 12 }}
    >
      <SectionTitle id="video-title" eyebrow="Official music video">Why Do We Fret?</SectionTitle>
      <Reveal>
        <Box sx={{ ...cardSx, p: 2 }}>
          <LiteYouTube videoId="kFuGYzCTbsU" title="Why Do We Fret? (Official Music Video)" />
        </Box>
      </Reveal>
    </Box>
  );
}

export default NewReleaseVideo;
