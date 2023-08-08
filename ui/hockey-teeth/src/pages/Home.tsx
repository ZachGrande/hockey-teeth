import React from "react";
import Shows from "./Shows";
import Biography from "./Biography";
import NewReleaseVideo from "../components/NewReleaseVideo";
import NewReleaseMusic from "../components/NewReleaseMusic";
import {ShowType} from "../data/Shows.types";

interface IShowsProps {
  title: string;
  data: ShowType[];
}
function Home({ title, data }: IShowsProps) {
  const album1 =
    {
      songName: "Dialtone - Single",
      coverURL: "https://d19uxx92abk94f.cloudfront.net/album-covers/dialtone.png",
      link: "https://distrokid.com/hyperfollow/hockeyteeth/dialtone"
    };
  const album2 =
    {
      songName: "Start and Delay - EP",
      releaseDate: "August 18",
      coverURL: "https://d19uxx92abk94f.cloudfront.net/album-covers/start-and-delay.png",
      link: "https://distrokid.com/hyperfollow/hockeyteeth/start-and-delay"
    };

  return (
    <div>
      <NewReleaseMusic album={album2}/>
      <NewReleaseMusic album={album1}/>
      <NewReleaseVideo />
      <Shows title={title} data={data}/>
      <Biography showAccolades={false}/>
    </div>
  );
}

export default Home;