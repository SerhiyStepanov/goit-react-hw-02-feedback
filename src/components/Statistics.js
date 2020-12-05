import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) {
  return (
    <Fragment>
      <ul>
        <li>
          <p className={s.text}>Good : {good}</p>
        </li>
        <li>
          <p className={s.text}>Neutral : {neutral}</p>
        </li>
        <li>
          <p className={s.text}>Bad : {bad} </p>
        </li>
        <li>
          <p className={s.text}>Total : {total} </p>
        </li>
        <li>
          <p className={s.text}>Positive feedback : {positivePercentage} %</p>
        </li>
      </ul>
    </Fragment>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
