import {Typography} from "@mui/material";
import React from "react";

function Videos() {
    const videos = [
        {
            title: "KSPU Session",
            link: "https://www.youtube.com/embed/tUz4Hmn6lAI"
        },
        {
            title: "Freshwater Session",
            link: "https://www.youtube.com/embed/FVeE-bCO3XQ"
        },
        {
            title: "Isolation",
            link: "https://www.youtube.com/embed/8kFYLvi7u0o"
        },
        {
            title: "Go There",
            link: "https://www.youtube.com/embed/BlcXgZdIpms"
        },
        {
            title: "Behind The Scenes",
            link: "https://www.youtube.com/embed/VxBGSGYzP8Y"
        },
        {
            title: "Pocket Concerts",
            link: "https://www.youtube.com/embed/i3d9LylY_cc"
        }
    ]

    return (
        <>
            <Typography variant="h1">Sick Of Me Music Video Out Now!</Typography>
            <br />
                <div style={{
                         position: 'relative',
                         display: 'flex',
                         paddingBottom: '56.25%',
                         height: 0,
                         overflow: 'hidden',
                         justifyContent: 'center'
                     }}
                >
                    <iframe
                        width="90%" height="90%"
                        title="Sick Of Me"
                        src="https://www.youtube.com/embed/c-3rrAArNFU"
                        style={{
                            position: 'absolute'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </div>
        </>
    );
}

export default Videos;
