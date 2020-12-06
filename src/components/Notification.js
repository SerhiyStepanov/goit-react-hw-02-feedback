import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function Notification({ message }) {
  return (
    <Fragment>
      <p className={s.message}>{message}</p>
    </Fragment>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};
