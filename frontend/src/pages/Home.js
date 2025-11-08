import "./Home.css"; // Make sure Home.css is in the same folder
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Welcome to Campus Connect</h1>
        <p>Your one-stop hub for college societies, events, clubs, and community updates!</p>
        <div className="home-actions">
          <Link className="home-btn" to="/student">Student Dashboard</Link>
          <Link className="home-btn" to="/teacher">Teacher Portal</Link>
          <Link className="home-btn" to="/society">Society Events</Link>
        </div>
      </header>
      <section className="home-info">
        <h2>Features</h2>
        <ul>
          <li>🗓️ Club & Society Event Updates</li>
          <li>🎟️ Easy Ticket/Slot Booking</li>
          <li>📝 Teacher & Student Dashboards</li>
          <li>💬 Feedback & Community Announcements</li>
        </ul>
      </section>
      <footer className="home-footer">Built for your campus. Empowered by you.</footer>
    </div>
  );
}

export default Home;