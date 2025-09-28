import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import type { StoreItemCardProps } from '@/types/store';

function StoreItemCard({
  title,
  description,
  image,
  link,
}: StoreItemCardProps) {
  const theme = useTheme();
  return (
    <Card
      elevation={0}
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        bgcolor: 'transparent',
        border: `1px solid ${theme.palette.text.primary}`,
        transition: 'transform 0.35s cubic-bezier(.4,0,.2,1), box-shadow 0.35s',
        maxWidth: { xs: 340, sm: 420 },
        width: '100%',
        mx: 'auto',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 12px 32px -8px ${theme.palette.text.primary}33`,
        },
        '&:focus-within': {
          outline: `2px solid ${theme.palette.text.primary}`,
          outlineOffset: 2,
        },
      }}
    >
      <CardActionArea
        component="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} on Bandcamp`}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            aspectRatio: { xs: '1 / 1', md: '4 / 5' }, // square on mobile, slightly taller portrait on desktop
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            loading="lazy"
            decoding="async"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(8%) contrast(105%)',
              transition: 'transform 0.6s ease, filter 0.6s ease',
              '.MuiCard-root:hover &': {
                transform: 'scale(1.03)',
                filter: 'grayscale(0%) contrast(108%)',
              },
              '@media (prefers-reduced-motion: reduce)': {
                transition: 'none',
              },
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)',
              opacity: 0.85,
              mixBlendMode: 'multiply',
              pointerEvents: 'none',
            }}
          />
        </Box>
        <CardContent
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 1,
            position: 'relative',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: 20, sm: 22 },
              lineHeight: 1.15,
            }}
          >
            {description}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            component="span" // avoid nested interactive element within anchor
            sx={{
              mt: 1.5,
              textTransform: 'none',
              borderRadius: 999,
              backdropFilter: 'blur(4px)',
              bgcolor: 'transparent',
              borderColor: theme.palette.text.primary,
              fontWeight: 600,
              px: 3,
              '&:hover': {
                bgcolor: theme.palette.primary.main,
                borderColor: theme.palette.text.primary,
              },
            }}
          >
            View on Bandcamp
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default StoreItemCard;
