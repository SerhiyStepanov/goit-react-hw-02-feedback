import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function Section({ title, children }) {
  return (
    <Fragment>
      <h2 className={s.title}>{title}</h2>
      {children}
    </Fragment>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
