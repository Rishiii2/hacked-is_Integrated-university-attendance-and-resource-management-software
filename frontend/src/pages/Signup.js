import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    designation: "",
    year: "",
    type: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    setSuccess(null);
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Registered successfully!");
        setSuccess(true);
        setForm({
          name: "",
          roll: "",
          designation: "",
          year: "",
          type: "",
          email: "",
          password: ""
        });
      } else {
        setMessage(data.message || "Registration failed.");
        setSuccess(false);
      }
    } catch (err) {
      setMessage("Error connecting to server.");
      setSuccess(false);
    }
    setIsLoading(false);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="roll" value={form.roll} onChange={handleChange} placeholder="Roll Number" required />
      <input name="designation" value={form.designation} onChange={handleChange} placeholder="Designation" required />
      <input name="year" value={form.year} onChange={handleChange} placeholder="Year of Study" required />
      <select name="type" value={form.type} onChange={handleChange} required>
        <option value="">Type of User</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="society">Society</option>
      </select>
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit" disabled={isLoading}>{isLoading ? "Registering..." : "Register"}</button>
      {message && (
        <div style={{ color: success ? 'green' : 'red', marginTop: "1em" }}>{message}</div>
      )}
    </form>
  );
}

export default Signup;
