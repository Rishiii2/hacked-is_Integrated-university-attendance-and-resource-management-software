import React, { useState } from "react";

export default function CommentForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(author && content){
      onSubmit({ author, content });
      setAuthor("");
      setContent("");
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Your name"
        required
      />
      <textarea
        className="form-input"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Your comment"
        required
      />
      <button className="form-button" type="submit">Add Comment</button>
    </form>
  );
}

