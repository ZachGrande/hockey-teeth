import React from "react";
import Shows from "./Shows";
import Biography from "./Biography";

interface IShowsProps {
  title: string;
  data: object;
}
function Home({ title, data }: IShowsProps) {
  return (
    <div>
      <Shows title={title} data={data}/>
      <Biography />
    </div>
  );
}

export default Home;