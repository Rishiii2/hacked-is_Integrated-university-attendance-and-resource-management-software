import React, { useState } from "react";
import "./SocietyEventPage.css";

function SocietyEventPage() {
  // Sample static data
  const [events, setEvents] = useState([
    {
      title: "AI Club Orientation",
      description: "Join us for a glimpse into AI projects and meet the team!",
      poster: "https://via.placeholder.com/320x180?text=AI+Club+Poster",
      date: "2025-11-15",
      slots: 50,
      price: 100,
      postedBy: "AI Club"
    }
  ]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    poster: "",
    date: "",
    slots: "",
    price: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([
      ...events,
      { ...form, postedBy: "Society Admin" }
    ]);
    setForm({ title: "", description: "", poster: "", date: "", slots: "", price: "" });
  };

  return (
    <div className="soc-event-container">
      <h2 className="soc-event-title">Society Events & Ticketing</h2>
      <form className="soc-event-form" onSubmit={handleSubmit}>
        <h3>Post a New Event</h3>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Event Description" required />
        <input name="poster" value={form.poster} onChange={handleChange} placeholder="Poster Image URL" required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <input name="slots" type="number" value={form.slots} onChange={handleChange} placeholder="Number of Tickets/Slots" required />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Ticket Price (₹)" required />
        <button type="submit">Post Event</button>
      </form>
      <h3 className="soc-event-list-title">Upcoming Events</h3>
      <div className="soc-event-list">
        {events.map((event, idx) => (
          <div className="soc-event-card" key={idx}>
            <img className="soc-event-img" src={event.poster} alt={event.title + " Poster"} />
            <div className="soc-event-info">
              <div className="soc-event-label">{event.postedBy}</div>
              <h4>{event.title}</h4>
              <div className="soc-event-date">{event.date}</div>
              <p className="soc-event-desc">{event.description}</p>
              <div className="soc-event-tickets">
                <span>Available Slots: {event.slots}</span>
                <span className="soc-event-price">₹{event.price}</span>
              </div>
              <button className="soc-event-book" disabled>Book Slot</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocietyEventPage;
