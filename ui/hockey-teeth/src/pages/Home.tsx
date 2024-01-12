import React from 'react';
import Shows from './Shows';
import Biography from './Biography';
import NewReleaseVideo from '../components/NewReleaseVideo';
import NewReleaseMusic from '../components/NewReleaseMusic';

interface IShowsProps {
  title: string;
  path: string;
}
function Home({ title, path }: IShowsProps) {
  const bigRed = {
    songName: 'Big Red - Single',
    coverURL: 'https://d19uxx92abk94f.cloudfront.net/album-covers/big-red.webp',
    link: 'https://distrokid.com/hyperfollow/hockeyteeth/big-red',
  };

  return (
    <div>
      <Shows title={title} path={path} />
      <NewReleaseMusic album={bigRed} />
      <NewReleaseVideo />
      <Biography showAccolades={false} />
    </div>
  );
}

export default Home;
