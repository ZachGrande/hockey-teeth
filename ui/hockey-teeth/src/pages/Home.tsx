import React from 'react';
import Shows, { IShowsProps } from './Shows';
import Biography from './Biography';
import NewReleaseVideo from '../components/NewReleaseVideo';
import NewReleaseMusic from '../components/NewReleaseMusic';

function Home({ title, isUpcoming }: IShowsProps) {
  const newMusic = {
    songName: 'Cut Your Teeth',
    releaseDate: 'May 30, 2025',
    coverURL: 'https://d19uxx92abk94f.cloudfront.net/album-covers/cut-your-teeth.webp',
    link: 'https://hockeyteeth1.bandcamp.com/album/cut-your-teeth',
  };

  return (
    <div>
      <Shows title={title} isUpcoming={isUpcoming} />
      <NewReleaseMusic album={newMusic} />
      <NewReleaseVideo />
      <Biography showAccolades={false} />
    </div>
  );
}

export default Home;
