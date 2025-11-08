import React from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
  // Sample static data; replace with real API data as needed.
  const attendance = 92;
  const upcomingClasses = [
    { subject: "Maths", date: "2025-11-10", time: "10:00 AM" },
    { subject: "Physics", date: "2025-11-11", time: "9:00 AM" }
  ];
  const clubMessages = [
    { text: "Tech Club Hackathon this week!", priority: "high", type: "event" },
    { text: "Drama Society: Auditions open!", priority: "medium", type: "announcement" }
  ];

  return (
    <div className="stud-dashboard">
      <header>
        <h2>👋 Welcome, Student!</h2>
        <div className="stud-id">B.Tech CSE · 2025</div>
      </header>

      <section className="stud-card attendance-card">
        <h3>Attendance</h3>
        <div className="attendance-percent">
          <span>{attendance}%</span>
        </div>
        {attendance < 75 && (
          <div className="attendance-warning">
            Warning: Attendance is low!
          </div>
        )}
      </section>

      <section className="stud-card">
        <h3>Upcoming Classes</h3>
        <ul className="class-list">
          {upcomingClasses.map((c, i) => (
            <li key={i}>
              <span className="class-subject">{c.subject}</span>
              <span className="class-date">{c.date}</span>
              <span className="class-time">{c.time}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="stud-card">
        <h3>Club & Society Messages</h3>
        <ul className="club-msg-list">
          {clubMessages.length === 0 && (
            <li className="no-msg">No new messages</li>
          )}
          {clubMessages.map((m, idx) => (
            <li key={idx} className={`msg-priority-${m.priority}`}>
              <div>{m.text}</div>
              <span className="msg-type">{m.type}</span>
              <span className="msg-priority">{m.priority}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default StudentDashboard;