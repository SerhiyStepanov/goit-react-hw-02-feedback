import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <Fragment>
      <div className={s.btnContainer}>
        <button
          type="button"
          name="good"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          good
        </button>

        <button
          type="button"
          name="neutral"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          neutral
        </button>

        <button
          type="button"
          name="bad"
          className={s.btn}
          onClick={onLeaveFeedback}
        >
          bad
        </button>
      </div>
    </Fragment>
  );
}

FeedbackOptions.propTypes = {
  increment: PropTypes.func,
};
