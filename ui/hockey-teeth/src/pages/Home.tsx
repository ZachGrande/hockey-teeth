import React from 'react';
import NewReleaseMusic from '../components/NewReleaseMusic';
import NewReleaseVideo from '../components/NewReleaseVideo';
import UpcomingShows from '../components/UpcomingShows';

const newMusic = {
  songName: 'Cut Your Teeth',
  coverURL: 'https://d19uxx92abk94f.cloudfront.net/album-covers/cut-your-teeth.webp',
  link: 'https://hockeyteeth1.bandcamp.com/album/cut-your-teeth',
};

function Home() {
  return (
    <>
      <UpcomingShows />
      <NewReleaseMusic album={newMusic} />
      <NewReleaseVideo />
    </>
  );
}

export default Home;
