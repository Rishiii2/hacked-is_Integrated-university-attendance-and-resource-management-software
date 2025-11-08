import React from "react";
import CommentSection from "./CommentSection";

export default function PostCard({ post }) {
  return (
    <section className="event-card">
      <div className="event-card-img">
        <img src={post.poster} alt={post.title + " Poster"} />
      </div>
      <div className="event-card-info">
        <span className="club-badge">{post.club}</span>
        <div className="event-title">{post.title}</div>
        <div className="event-date">{post.date}</div>
        <p className="event-desc">{post.description}</p>
      </div>
      <CommentSection postId={post.id} />
    </section>
  );
}

