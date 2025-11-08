import React, { useState } from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        author: comment.author,
        content: comment.content,
        timestamp: new Date().toLocaleString()
      }
    ]);
  };

  return (
    <div className="comment-container">
      <h3>Feedback & Comments</h3>
      <div className="comment-list">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentForm onSubmit={addComment} />
    </div>
  );
}
