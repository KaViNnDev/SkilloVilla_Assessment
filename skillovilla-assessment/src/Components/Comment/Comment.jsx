import React from "react";
import { COMMENTED_TIME, PERSON_NAME, REPLY_TEXT } from "../Strings";
import Person from "./../../Assets/Placeholder.svg";
import Styles from "./styles.css";

export const Comment = ({ comment: { id, comment, replies } }) => {
  return (
    <React.Fragment key={`${id}`}>
      <div className="comment-section-overlay">
        <div className="comment-section-container">
          <img
            src={Person}
            className="comment-section-img"
            alt="profileImage"
          />
          <div className="comment-section-wrapper">
            <div className="comment-header-wrapper">
              <span className="comment-name">{PERSON_NAME}</span>
              <span className="comment-text-small">•</span>
              <span className="comment-text-small">{COMMENTED_TIME}</span>
            </div>
            <div className="comment-section">{comment}</div>
            <span className="comment-text-small comment-reply">
              {REPLY_TEXT}
            </span>
          </div>
        </div>
        {replies?.length > 0
          ? replies.map((reply, index) => (
              <Comment key={index} comment={reply} />
            ))
          : null}
      </div>
    </React.Fragment>
  );
};
