import React from 'react';
import {Card, CardContent, Typography, Button, Box, Container, useTheme} from '@mui/material';

const NewReleaseVideo = () => {
    const theme = useTheme();
    const album =
        {
            songName: "Dialtone",
            releaseDate: "July 21",
            coverURL: "https://d19uxx92abk94f.cloudfront.net/album-covers/dialtone.png",
            preSaleLink: "https://distrokid.com/hyperfollow/hockeyteeth/dialtone"
        };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: '25px'
            }}
        >
            <Card
                sx={{
                    borderRadius: '15px',
                    overflow: 'visible',
                    width: '50%',
                    mb: '25px',
                    backgroundColor: '#F3F3F3',
                    boxShadow: 3
                }}
            >
                <Box
                    component={"img"}
                    sx={{
                        height: 'auto',
                        width: '50%',
                        position: 'relative',
                        top: '-25px',
                        mb: '-25px',
                        borderRadius: '5px'
                    }}
                    title={album.songName}
                    src={album.coverURL} alt="cover"
                />
                <CardContent sx={{ mt: 1, mb: 2 }}>
                    <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                        {album.songName}
                    </Typography>
                    <Typography variant="h5" color={theme.palette.text.secondary} font-size="10">
                        {album.releaseDate}
                    </Typography>
                    <Button variant="contained" href={album.preSaleLink} target="_blank" rel="noreferrer" sx={{ mt: 2 }}>
                        <Typography variant="h6" font-size="10">
                            {"PRESALE"}
                        </Typography>
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
}

export default NewReleaseVideo;
