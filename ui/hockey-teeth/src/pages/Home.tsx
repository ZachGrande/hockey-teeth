import React from 'react';
import Shows, { IShowsProps } from './Shows';
import NewReleaseVideo from '../components/NewReleaseVideo';
import NewReleaseMusic from '../components/NewReleaseMusic';

function Home({ title, isUpcoming }: IShowsProps) {
  const newMusic = {
    songName: 'Cut Your Teeth',
    coverURL: 'https://d19uxx92abk94f.cloudfront.net/album-covers/cut-your-teeth.webp',
    link: 'https://hockeyteeth1.bandcamp.com/album/cut-your-teeth',
  };

  return (
    <div>
      <NewReleaseMusic album={newMusic} />
      <Shows title={title} isUpcoming={isUpcoming} />
      <NewReleaseVideo />
    </div>
  );
}

export default Home;
