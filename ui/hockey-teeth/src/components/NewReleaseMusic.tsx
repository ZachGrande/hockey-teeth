import React from 'react';
import { Box, Typography } from '@mui/material';
import { cardSx, colors, fonts } from '../theme/tokens';
import PillLink from './PillLink';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export interface INewReleaseMusicProps {
  album: {
    songName: string;
    releaseDate?: string;
    coverURL: string;
    link: string;
  };
}

function NewReleaseMusic({ album }: INewReleaseMusicProps) {
  const isPresave = Boolean(album.releaseDate);

  return (
    <Box
      component="section"
      aria-labelledby="release-title"
      sx={{ maxWidth: 400, mx: 'auto', mb: 12 }}
    >
      <SectionTitle id="release-title" eyebrow={isPresave ? 'Coming soon' : 'Out now'}>
        New Release
      </SectionTitle>
      <Reveal>
        <Box sx={{ ...cardSx, p: 4 }}>
          <Box
            component="img"
            src={album.coverURL}
            alt={`${album.songName} cover art`}
            loading="lazy"
            width={600}
            height={600}
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
          <Typography
            component="h3"
            sx={{
              mt: 4,
              color: colors.ink,
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1.2,
            }}
          >
            {album.songName}
          </Typography>
          {album.releaseDate && (
            <Typography sx={{ mt: 1, color: colors.muted, fontFamily: fonts.body }}>
              {album.releaseDate}
            </Typography>
          )}
          <Box sx={{ mt: 4 }}>
            <PillLink
              tone="pink"
              block
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isPresave ? 'Presave' : 'Listen now'}
            </PillLink>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}

export default NewReleaseMusic;
