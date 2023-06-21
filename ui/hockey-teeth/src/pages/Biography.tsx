import React from "react";
import {ImageList, ImageListItem, Link, List, Typography} from "@mui/material";
import {biography} from "../data/Biography";

interface IBiographyProps {
  showAccolades: boolean;
}

function Biography({ showAccolades }: IBiographyProps) {
  const accolades = [
    {
      description: "2020 Winners of Western Washington University's Battle of the Bands"
    },
    {
      description: "Over 50,000 all-time streams across Apple Music & Spotify"
    },
    {
      description: "Generated over 15,000 total streams for our first single, Apt"
    },
    {
      description: "Over 10,000 total streams for our latest release, Sick Of Me"
    }
  ]

  const images = [
    {
      title: "Photo 1",
      image: "https://d19uxx92abk94f.cloudfront.net/band-photos/band-01.png",
      cols: 2,
      rows: 1,
      width: "10px"
    },
    {
      title: "Photo 2",
      image: "https://d19uxx92abk94f.cloudfront.net/band-photos/band-02.png",
      cols: 2,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 3",
      image: "https://d19uxx92abk94f.cloudfront.net/band-photos/band-03.png",
      cols: 2,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 4",
      image: "https://d19uxx92abk94f.cloudfront.net/band-photos/band-04.png",
      cols: 1,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 5",
      image: "https://d19uxx92abk94f.cloudfront.net/band-photos/band-05.png",
      cols: 1,
      rows: 2,
      width: "64px"
    },
    {
      title: "Photo 6",
      image: "https://d19uxx92abk94f.cloudfront.net/band-photos/band-06.png",
      cols: 2,
      rows: 1,
      width: "64px"
    },
  ]

  return (
    <>
      <Typography variant="h1">Hockey Teeth</Typography>
      <br />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          paddingBottom: '66.67%',
          height: 0,
          overflow: 'hidden',
          justifyContent: 'center'
        }}
      >
        <img
          width="90%" height="90%"
          style={{
            position: 'absolute'
          }}
          src={"https://d19uxx92abk94f.cloudfront.net/band-photos/cover.png"} alt="cover"
        />
      </div>
      <Typography variant="h3">
        About Hockey Teeth
      </Typography>
      <Typography variant="body1" sx={{ margin: 5 }}>
        {biography.bio}
      </Typography>
      <ImageList
        sx={{
          margin: 5,
        }}
        variant="masonry"
        cols={3}
        gap={8}
      >
        {images.map((item) => (
          <ImageListItem
            key={item.image}
            cols={item.cols || 1}
            rows={item.rows || 1}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
          />
          </ImageListItem>
        ))}
      </ImageList>
      {showAccolades &&
        <>
          <Typography variant="h3">
            Accolades
          </Typography><List>
            {accolades.map((item) => (
              <Typography key={item.description} variant="body1"
                          sx={{
                            mt: 2,
                            mb: 2
                          }}>
                {item.description}
              </Typography>
            ))}
          </List>
        </>
      }
      <Typography variant="h3">
        Contact Info
      </Typography>
      <Typography variant="body1" sx={{ margin: 2 }}>
        For booking requests, please email us at
        <br />
        <Link variant="body1" color="inherit" href="mailto: hockeyteethband@gmail.com"
              target="_blank"
              rel="noreferrer">
          hockeyteethband@gmail.com
        </Link>
      </Typography>
    </>
  );
}

export default Biography;
