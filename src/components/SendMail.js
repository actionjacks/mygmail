import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import "../styles/SendMail.css";

import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

import firebase from "firebase";
import { db } from "../firebase";

function SendMail() {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  
  //submit values from form to db
  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <HighlightOffIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          ref={register({ required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}
        <input
          name="subject"
          ref={register({ required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail__error">subject is Required</p>
        )}
        <input
          name="message"
          ref={register({ required: true })}
          placeholder="Message..."
          type="text"
          className="sendMail__message"
        />
        {errors.message && (
          <p className="sendMail__error">message is Required</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
