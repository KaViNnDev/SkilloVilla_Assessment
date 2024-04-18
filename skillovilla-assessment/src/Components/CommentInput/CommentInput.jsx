import React from "react";
import Person from "./../../Assets/Person.svg";
import { INPUT_PLACEHOLDER } from "../Strings";
import Styles from "./styles.css";

export const CommentInput = ({ value, keyDownHandler, onChangeHandler }) => {
  return (
    <div className="comment-input-container">
      <img src={Person} className="comment-input-img" alt="Placeholder" />

      <div className="comment-input-wrapper">
        <input
          className="comment-input"
          aria-label="comment"
          autoFocus
          placeholder={INPUT_PLACEHOLDER}
          value={value}
          onKeyDown={keyDownHandler}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
