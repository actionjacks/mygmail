import React from "react";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import LabelIcon from "@material-ui/icons/Label";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        fontSize="large"
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        selected={true}
        Icon={InboxIcon}
        title="Inbox"
        number={50}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={12} />

      <SidebarOption Icon={AccessAlarmIcon} title="Snoozed" number={3} />
      <SidebarOption Icon={LabelIcon} title="Important" number={5} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={6} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={12} />
      <SidebarOption Icon={ExitToAppIcon} title="More" number={22} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
