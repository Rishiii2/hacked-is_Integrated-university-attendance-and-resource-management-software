import React, { useState } from "react";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  // Example static data for demonstration
  const [studentRoster, setStudentRoster] = useState([
    "ria101@college.edu",
    "jay102@college.edu",
    "sid103@college.edu"
  ]);
  const [notifications, setNotifications] = useState([
    { text: "Submit grades by Friday", priority: "high", type: "admin" },
    { text: "Class rescheduled to Monday", priority: "medium", type: "class" }
  ]);
  const [upcomingClasses] = useState([
    { subject: "Linear Algebra", date: "2025-11-12", time: "10:00AM" },
    { subject: "Data Structures", date: "2025-11-13", time: "11:30AM" }
  ]);
  const [pendingSyllabus] = useState([
    "Chapter 6: Trees",
    "Chapter 7: Graphs"
  ]);

  return (
    <div className="teacher-dashboard">
      <header>
        <h2>👩‍🏫 Teacher Dashboard</h2>
        <div className="teacher-id">Department: CSE</div>
      </header>

      {/* Student Roster */}
      <section className="teacher-card">
        <h3>Student Roster</h3>
        <ul className="roster-list">
          {studentRoster.map((email, idx) => (
            <li key={idx}>{email}</li>
          ))}
        </ul>
      </section>

      {/* Notifications */}
      <section className="teacher-card">
        <h3>Notifications</h3>
        <ul className="notif-list">
          {notifications.map((notif, idx) => (
            <li key={idx} className={`notif-priority-${notif.priority}`}>
              <span className="notif-type">{notif.type}</span>
              <span className="notif-text">{notif.text}</span>
              <span className="notif-priority">{notif.priority}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Upcoming Classes */}
      <section className="teacher-card">
        <h3>Upcoming Classes</h3>
        <ul className="upcoming-list">
          {upcomingClasses.map((cls, idx) => (
            <li key={idx}>
              <span className="class-subject">{cls.subject}</span>
              <span className="class-date">{cls.date}</span>
              <span className="class-time">{cls.time}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pending Syllabus */}
      <section className="teacher-card">
        <h3>Pending Syllabus</h3>
        <ul className="syllabus-list">
          {pendingSyllabus.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TeacherDashboard;