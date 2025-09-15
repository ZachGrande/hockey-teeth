import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import AdminLayout from '../layouts/AdminLayout';
import Shows from '../pages/Shows';
import Videos from '../pages/Videos';
import News from '../pages/News';
import Biography from '../pages/Biography';
import Music from '../pages/Music';
import Home from '../pages/Home';
import HomeAdmin from '../pages/admin/HomeAdmin';
import Store from '../pages/Store';

function SiteRouter() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home title="Upcoming Shows" isUpcoming />} />
        <Route path="videos" element={<Videos />} />
        <Route path="past-shows" element={<Shows title="Past Shows" isUpcoming={false} />} />
        <Route path="news" element={<News />} />
        <Route path="bio" element={<Biography showAccolades={false} />} />
        <Route path="music" element={<Music />} />
        <Route path="store" element={<Store />} />
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="admin" element={<HomeAdmin />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}

export default SiteRouter;
