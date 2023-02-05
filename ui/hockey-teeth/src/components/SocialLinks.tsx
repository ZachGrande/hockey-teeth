import instagram from "../assets/instagram.svg";
import spotify from "../assets/spotify.svg";
import apple from "../assets/apple-music.svg";
import bandcamp from "../assets/bandcamp.svg";
import {Stack} from "@mui/material";
import React from "react";

function SocialLinks() {
  const social = [
    {
      image: instagram,
      link: "https://www.instagram.com/hockeyteethband/"
    },
    {
      image: spotify,
      link: "https://open.spotify.com/artist/2Flj4MtGAxNIW1Ahutwa37?si=Rzc-IdzeQvGLkFKLytPU_Q/"
    },
    {
      image: apple,
      link: "https://music.apple.com/us/artist/hockey-teeth/1529979055"
    },
    {
      image: bandcamp,
      link: "https://hockeyteeth1.bandcamp.com/"
    }
  ]

  return (
    <Stack className="social" direction="row" spacing={2}
           sx={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center"
           }}
    >
      {social.map((data, key) => {
        return (
          <a href={data.link}
             target="_blank"
             rel="noreferrer"
             key={key}>
            <img src={data.image} alt="instagram" />
          </a>
        );
      })}
    </Stack>
  );
}

export default SocialLinks;