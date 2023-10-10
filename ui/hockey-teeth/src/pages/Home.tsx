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
  const startAndDelay = {
    songName: 'Start and Delay - EP',
    coverURL: 'https://d19uxx92abk94f.cloudfront.net/album-covers/start-and-delay.webp',
    link: 'https://distrokid.com/hyperfollow/hockeyteeth/start-and-delay',
  };

  return (
    <div>
      <NewReleaseMusic album={startAndDelay} />
      <Shows title={title} path={path} />
      <NewReleaseVideo />
      <Biography showAccolades={false} />
    </div>
  );
}

export default Home;
