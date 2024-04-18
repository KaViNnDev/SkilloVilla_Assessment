import { useEffect, useState } from "react";
import { COMMENTS } from "../data/comment";
import { StorageKey } from "./../config";

export const useCommentSection = () => {
  const [comments, setComments] = useState(COMMENTS);
  const [mainComment, setMainComment] = useState("");

  useEffect(() => {
    const preservedComments = localStorage.getItem(StorageKey);
    console.log({
      preservedComments,
    });
  }, []);

  const updateMainComment = (comment) => {
    setComments((prevComments) => {
      const clonedComments = [...prevComments];
      const obj = {
        id: new Date().getTime(),
        comment,
      };
      clonedComments.unshift(obj);
      console.log({
        clonedComments,
      });
      localStorage.setItem(StorageKey, JSON.stringify(clonedComments));
      return clonedComments;
    });
    setMainComment("");
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      updateMainComment(e.target.value);
    }
  };

  const commentChangeHandler = (e) => {
    setMainComment(e.target.value);
  };

  return {
    comments,
    commentChangeHandler,
    mainComment,
    keyDownHandler,
  };
};
