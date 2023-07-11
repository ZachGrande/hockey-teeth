import React from "react";
import Shows from "./Shows";
import Biography from "./Biography";
import NewReleaseVideo from "../components/NewReleaseVideo";
import NewReleaseMusic from "../components/NewReleaseMusic";

interface IShowsProps {
  title: string;
  data: object;
}
function Home({ title, data }: IShowsProps) {
  return (
    <div>
      <NewReleaseVideo />
      <NewReleaseMusic />
      <Shows title={title} data={data}/>
      <Biography showAccolades={false}/>
    </div>
  );
}

export default Home;