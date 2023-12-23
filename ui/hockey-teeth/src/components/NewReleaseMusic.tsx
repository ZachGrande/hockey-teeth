import React from 'react';
import {
  Card, CardContent, Typography, Button, Box, Container, useTheme,
} from '@mui/material';

export interface INewReleaseVideoProps {
  album: {
    songName: string;
    releaseDate?: string;
    coverURL: string;
    link: string;
  }
}

function NewReleaseVideo({ album }: INewReleaseVideoProps) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '25px',
      }}
    >
      <Card
        sx={{
          borderRadius: '15px',
          overflow: 'visible',
          width: '50%',
          mb: '25px',
          backgroundColor: '#F3F3F3',
          boxShadow: 3,
        }}
      >
        <Box
          component="img"
          sx={{
            height: 'auto',
            width: '50%',
            position: 'relative',
            top: '-25px',
            mb: '-25px',
            borderRadius: '5px',
          }}
          title={album.songName}
          src={album.coverURL}
          alt="cover"
        />
        <CardContent sx={{ mt: 1, mb: 2 }}>
          <Typography variant="h3" component="div" sx={{ mb: 1 }}>
            {album.songName}
          </Typography>
          <Typography variant="h5" color={theme.palette.text.secondary}>
            {album.releaseDate}
          </Typography>
          <Button variant="contained" href={album.link} target="_blank" rel="noreferrer" sx={{ mt: 2 }}>
            <Typography variant="h6">
              {album.releaseDate ? 'PRESAVE' : 'OUT NOW'}
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default NewReleaseVideo;
