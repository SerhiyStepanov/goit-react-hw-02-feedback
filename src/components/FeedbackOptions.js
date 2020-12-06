import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function FeedbackOptions({
  incrementGood,
  incrementNeutral,
  incrementBad,
}) {
  return (
    <Fragment>
      <div className={s.btnContainer}>
        <button type="button" className={s.btn} onClick={incrementGood}>
          good
        </button>

        <button type="button" className={s.btn} onClick={incrementNeutral}>
          neutral
        </button>

        <button type="button" className={s.btn} onClick={incrementBad}>
          bad
        </button>
      </div>
    </Fragment>
  );
}

FeedbackOptions.propTypes = {
  incrementGood: PropTypes.func,
  incrementNeutral: PropTypes.func,
  incrementBad: PropTypes.func,
};
