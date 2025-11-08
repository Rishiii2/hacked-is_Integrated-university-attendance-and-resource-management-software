import React, { useState } from "react";
import "./FeedbackPage.css";

function FeedbackPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", comment: "" });

  // Demo event/poster, could be a prop or fetched.
  const event = {
    title: "Tech Club Hackathon",
    poster: "https://via.placeholder.com/350x180?text=Tech+Club+Event",
    description: "Be part of our annual hackathon. All students welcome!"
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFeedbacks([
      ...feedbacks,
      {
        ...form,
        date: new Date().toLocaleString()
      }
    ]);
    setForm({ name: "", comment: "" });
  };

  return (
    <div className="feedback-container">
      <div className="feedback-event-card">
        <img src={event.poster} alt={event.title + " Poster"} className="feedback-event-img" />
        <div className="feedback-event-body">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      </div>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h3>Leave Feedback</h3>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Your Comment"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="feedback-list-section">
        <h3>Comments</h3>
        <ul className="feedback-list">
          {feedbacks.length === 0 && <li className="feedback-none">No comments yet. Be the first!</li>}
          {feedbacks.map((fb, idx) => (
            <li key={idx} className="feedback-comment">
              <div className="feedback-header">
                <span className="feedback-author">{fb.name}</span>
                <span className="feedback-date">{fb.date}</span>
              </div>
              <div className="feedback-text">{fb.comment}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FeedbackPage;
