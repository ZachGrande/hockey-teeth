import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Shows from "../pages/Shows";
import Videos from "../pages/Videos";
import {shows as showsFuture} from "../data/Shows";
import {shows as showsPast} from "../data/ShowsPast";
import News from "../pages/News";
import Biography from "../pages/Biography";
import Music from "../pages/Music";
import Home from "../pages/Home";

function SiteRouter() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Navigate replace to="/home" />}/>
        <Route path="home" element={<Home title="Upcoming Shows" data={showsFuture}/>}/>
        <Route path="videos" element={<Videos />}/>
        <Route path="past-shows" element={<Shows title="Past Shows" data={showsPast}/>}/>
        <Route path="news" element={<News />}/>
        <Route path="bio" element={<Biography showAccolades={true}/>}/>
        <Route path="music" element={<Music />}/>
      </Route>
      <Route path="*" element={<Navigate replace to="/home" />}/>
    </Routes>
  );
}

export default SiteRouter;