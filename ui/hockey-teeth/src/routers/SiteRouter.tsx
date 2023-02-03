import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Shows from "../pages/Shows";

function SiteRouter() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Navigate replace to="/home" />}/>
        <Route path="home" element={<Shows />}/>
      </Route>
      <Route path="*" element={<Navigate replace to="/home" />}/>
    </Routes>
  );
}

export default SiteRouter;