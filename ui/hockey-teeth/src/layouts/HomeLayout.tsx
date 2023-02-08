import logo from "../assets/logo.png";
import MailingList from "../components/MailingList";
import SocialLinks from "../components/SocialLinks";
import React from "react";
import {Outlet} from "react-router-dom";
import MenuBar from "../components/MenuBar";
import {Container} from "@mui/material";

function HomeLayout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container maxWidth="md">
        <MenuBar />
        <Outlet />
        <MailingList />
        <br />
        <br />
        <SocialLinks />
      </Container>
    </div>
  );
}

export default HomeLayout;