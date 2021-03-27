import React from "react";
import "../styles/Header.css";
import GmailLogo from "../assets/gm-icon.png";
//icons
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={GmailLogo} alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search" type="text" className="" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
