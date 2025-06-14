import React from 'react';

function Videos() {
  const videos = [
    {
      title: 'Big Red (Live on Art Zone)',
      link: 'https://www.youtube.com/embed/kbU2WG9gzSs',
    },
    {
      title: 'Food for Thought',
      link: 'https://www.youtube.com/embed/oM4hGOilvFk',
    },
    {
      title: 'Big Red (Live at The Sunset Tavern)',
      link: 'https://www.youtube.com/embed/JcHOBLHW9HY',
    },
    {
      title: 'Tired Of Being Tough',
      link: 'https://www.youtube.com/embed/0ip_Mz7b0NM',
    },
    {
      title: 'Big Red (Live)',
      link: 'https://www.youtube.com/embed/Uw29IU4BR-s',
    },
    {
      title: 'Roll Up',
      link: 'https://www.youtube.com/embed/FnDCfOJUN0g',
    },
    {
      title: 'Sick Of Me',
      link: 'https://www.youtube.com/embed/c-3rrAArNFU',
    },
    {
      title: 'KSPU Session',
      link: 'https://www.youtube.com/embed/tUz4Hmn6lAI',
    },
    {
      title: 'Freshwater Session',
      link: 'https://www.youtube.com/embed/FVeE-bCO3XQ',
    },
    {
      title: 'Isolation',
      link: 'https://www.youtube.com/embed/8kFYLvi7u0o',
    },
    {
      title: 'Go There',
      link: 'https://www.youtube.com/embed/BlcXgZdIpms',
    },
    {
      title: 'Behind The Scenes',
      link: 'https://www.youtube.com/embed/VxBGSGYzP8Y',
    },
    {
      title: 'Pocket Concerts',
      link: 'https://www.youtube.com/embed/i3d9LylY_cc',
    },
  ];

  return (
    <>
      {videos.map((data) => (
        <div
          key={data.title}
          style={{
            position: 'relative',
            display: 'flex',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            justifyContent: 'center',
          }}
        >
          <iframe
            width="90%"
            height="90%"
            title={data.title}
            src={data.link}
            style={{
              position: 'absolute',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ))}
    </>
  );
}

export default Videos;
