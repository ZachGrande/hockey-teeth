import React from "react";
import Shows from "./Shows";
import Biography from "./Biography";
import NewReleaseVideo from "../components/NewReleaseVideo";

interface IShowsProps {
  title: string;
  data: object;
}
function Home({ title, data }: IShowsProps) {
  return (
    <div>
      <NewReleaseVideo />
      <Shows title={title} data={data}/>
      <Biography showAccolades={false}/>
    </div>
  );
}

export default Home;