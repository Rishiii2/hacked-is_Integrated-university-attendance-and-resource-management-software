import React, { useEffect, useState } from "react";
import "./RecommendedEvents.css"; // We'll add the CSS next

export default function RecommendedEvents({ interest }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/recommend-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interest })
    })
      .then(res => res.json())
      .then(data => setEvents(data));
  }, [interest]);

  return (
    <div className="events-page">
      <h2 className="events-title">Recommended Events For You</h2>
      {events.length === 0 && (
        <div className="events-none">No events found for your interest.</div>
      )}
      <div className="events-list">
        {events.map(event => (
          <div key={event._id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-details">
              <span className="event-category">{event.category}</span>
              <span className="event-date">
                {new Date(event.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
