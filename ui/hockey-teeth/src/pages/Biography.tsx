import React, { useEffect, useRef, useState } from 'react';
import {
  Box, ImageList, ImageListItem, Link, List, Typography,
} from '@mui/material';
import { AnimatePresence, m } from 'motion/react';
import biography from '../data/Biography';
import ShimmerSkeleton from '../components/ShimmerSkeleton';

const CDN_BASE_URL = 'https://d19uxx92abk94f.cloudfront.net';
const BAND_PHOTOS_URL = `${CDN_BASE_URL}/band-photos`;
const COVER_IMAGE_URL = `${BAND_PHOTOS_URL}/cover-2025-05-26.webp`;

interface IBiographyPhoto {
  file: string;
  cols: number;
  rows: number;
  height?: string;
}

const photos: IBiographyPhoto[] = [
  {
    file: 'band-01-2025-05-26.webp',
    cols: 2,
    rows: 1,
  },
  {
    file: 'band-02.webp',
    cols: 2,
    rows: 2,
    height: '345px',
  },
  {
    file: 'band-03.webp',
    cols: 2,
    rows: 2,
  },
  {
    file: 'band-04.webp',
    cols: 1,
    rows: 2,
  },
  {
    file: 'band-05-2025-05-26.webp',
    cols: 1,
    rows: 2,
    height: '339px',
  },
  {
    file: 'band-06-2025-05-26.webp',
    cols: 2,
    rows: 1,
  },
];

interface IBiographyProps {
  showAccolades: boolean;
}

function Biography({ showAccolades }: IBiographyProps) {
  const [coverFetched, setCoverFetched] = useState(false);
  const [minSkeletonElapsed, setMinSkeletonElapsed] = useState(false);
  const coverLoaded = coverFetched && minSkeletonElapsed;
  const coverRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (coverRef.current?.complete) {
      setCoverFetched(true);
    }
    // Show the shimmer skeleton for a minimum time
    const timer = setTimeout(() => setMinSkeletonElapsed(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const accolades = [
    {
      description: "2020 Winners of Western Washington University's Battle of the Bands",
    },
    {
      description: 'Over 50,000 all-time streams across Apple Music & Spotify',
    },
    {
      description: 'Generated over 15,000 total streams for our first single, Apt',
    },
    {
      description: 'Over 10,000 total streams for our latest release, Sick Of Me',
    },
  ];

  return (
    <>
      <Typography variant="h1">Hockey Teeth</Typography>
      <br />
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          pb: '66.67%',
          mb: 5,
          height: 0,
          overflow: 'hidden',
          justifyContent: 'center',
        }}
        aria-busy={!coverLoaded}
      >
        <AnimatePresence>
          {!coverLoaded && (
            <ShimmerSkeleton
              key="cover-skeleton"
              style={{
                position: 'absolute',
                width: '90%',
                height: '100%',
              }}
            />
          )}
        </AnimatePresence>
        <m.img
          ref={coverRef}
          width="90%"
          style={{
            position: 'absolute',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: coverLoaded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onLoad={() => setCoverFetched(true)}
          onError={() => setCoverFetched(true)}
          src={COVER_IMAGE_URL}
          alt="cover"
        />
      </Box>
      <Typography variant="h3">
        About Hockey Teeth
      </Typography>
      {biography.map((paragraph) => (
        <Typography variant="body1" sx={{ margin: 5 }} key={paragraph}>
          {paragraph}
        </Typography>
      ))}
      <ImageList
        sx={{
          margin: 5,
        }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {photos.map((item, index) => (
          <ImageListItem
            key={item.file}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              src={`${BAND_PHOTOS_URL}/${item.file}`}
              alt={`Hockey Teeth ${index + 1}`}
              loading="lazy"
              style={{
                height: item.height || 'auto',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {showAccolades
        && (
        <>
          <Typography variant="h3">
            Accolades
          </Typography>
          <List>
            {accolades.map((item) => (
              <Typography
                key={item.description}
                variant="body1"
                sx={{
                  mt: 2,
                  mb: 2,
                }}
              >
                {item.description}
              </Typography>
            ))}
          </List>
        </>
        )}
      <Typography variant="h3">
        Contact Info
      </Typography>
      <Typography variant="body1" sx={{ margin: 2 }}>
        For booking requests, please email us at
        <br />
        <Link
          variant="body1"
          color="inherit"
          href="mailto: hockeyteethband@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          hockeyteethband@gmail.com
        </Link>
      </Typography>
    </>
  );
}

export default Biography;
