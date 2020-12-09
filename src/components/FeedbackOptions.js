import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.btnContainer}>
      {options.map((el) => (
        <li key={el.id}>
          <button
            id={shortid.generate()}
            type="button"
            name={el}
            className={s.btn}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  optons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
