import React from "react";
import { CommentInput } from "../CommentInput/CommentInput";
import { Comment } from "../Comment/Comment";
import { useCommentSection } from "../../hooks/useCommentSection";

export const CommentSection = () => {
  const { commentChangeHandler, comments, keyDownHandler, mainComment } =
    useCommentSection();
  return (
    <React.Fragment key={"comment-section"}>
      <CommentInput
        value={mainComment}
        keyDownHandler={keyDownHandler}
        onChangeHandler={commentChangeHandler}
      />
      {comments?.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </React.Fragment>
  );
};
