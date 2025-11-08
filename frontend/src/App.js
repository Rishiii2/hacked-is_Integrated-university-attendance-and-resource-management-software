import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import SocietyEventPage from "./pages/SocietyEventPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FeedbackPage from "./pages/FeedbackPage";
import Workspace from "./pages/Workspace";
import RecommendedEvents from "./pages/RecommendedEvents";




function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "1em", padding: "1em", background: "#4ad0e4" }}>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/">Home</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/student">Student Dashboard</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/teacher">Teacher Dashboard</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/society">Society Event Page</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/feedback">Feedback</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/workspace">Workspace</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/RecommendedEvents">Recommended Events</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/login">Login</Link>
        <Link style={{ color: "#fff", fontWeight: "bold" }} to="/signup">Sign Up</Link>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/society" element={<SocietyEventPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/RecommendedEvents" element={<RecommendedEvents />} />
<Route path="/workspace" element={<Workspace />} />

      </Routes>
    </Router>
  );
}

export default App;

