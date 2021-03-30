import React from "react";
import Section from "./Section";
import EmailRow from "./EmailRow";
import "../styles/EmailList.css";
//icons
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import RedoIcon from "@material-ui/icons/Redo";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emaiList__settings">
        <div className="emailList__settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownCircleIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
        <div className="emailList__settingRight">
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleAltIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalActivityIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Twitch"
          subject="Hej helllo streamer"
          description="this is desc"
          time="10pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hej helllo streamer"
          description="this is desc"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
