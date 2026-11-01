import React, { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { colors, retroStep, shadows } from '../theme/tokens';

interface ILiteYouTubeProps {
  videoId: string;
  title: string;
}

function LiteYouTube({ videoId, title }: ILiteYouTubeProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: '10px',
        bgcolor: colors.ink,
      }}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1`}
          title={title}
          // eslint-disable-next-line @stylistic/max-len
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0,
          }}
        />
      ) : (
        <ButtonBase
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            '&:focus-visible': { outline: `2px solid ${colors.white}`, outlineOffset: -4 },
            '&:hover .play-button, &:focus-visible .play-button': { transform: 'scale(1.08)' },
          }}
        >
          <Box
            component="img"
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            sx={{
              position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
            }}
          />
          <Box
            className="play-button"
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              bgcolor: colors.coral,
              color: colors.white,
              boxShadow: shadows.low,
              transition: `transform 160ms ${retroStep}`,
            }}
          >
            <PlayArrowRoundedIcon sx={{ fontSize: 38 }} />
          </Box>
        </ButtonBase>
      )}
    </Box>
  );
}

export default LiteYouTube;
