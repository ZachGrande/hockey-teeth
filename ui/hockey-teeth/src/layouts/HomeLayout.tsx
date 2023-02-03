import logo from "../assets/logo.png";
import MailingList from "../components/MailingList";
import SocialLinks from "../components/SocialLinks";
import React from "react";
import {Outlet} from "react-router-dom";

function HomeLayout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Outlet />
      <MailingList />
      <br />
      <br />
      <SocialLinks />
    </div>
  );
}

export default HomeLayout;