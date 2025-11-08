import React from "react";

export default function Comment({ comment }) {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-date">{comment.timestamp}</span>
      </div>
      <div className="comment-text">{comment.content}</div>
    </div>
  );
}
