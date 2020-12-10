import React from "react";

import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.btnContainer}>
      {options.map((el) => (
        <li key={el}>
          <button
            id={el}
            type="button"
            name={el}
            className={s.btn}
            onClick={() => onLeaveFeedback(el)}
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
