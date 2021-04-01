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

import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

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
        <Avatar onClick={logOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
