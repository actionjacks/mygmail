import React from "react";
import "../styles/EmailRow.css";
//icons
import { Checkbox, IconButton } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import LabelIcon from "@material-ui/icons/Label";

import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <GradeIcon />
        </IconButton>
        <IconButton>
          <LabelIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          {" - "}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
