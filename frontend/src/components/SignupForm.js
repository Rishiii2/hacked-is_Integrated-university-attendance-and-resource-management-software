// components/SignupForm.js
import React, { useState } from "react";
import axios from "axios";
import "./Auth.css"; // Add modern styling

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    designation: "",
    year: "",
    type: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/register", formData);
      alert("Registration successful!");
    } catch (err) {
      alert("Registration failed!");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />
      <input type="text" name="rollNo" value={formData.rollNo} placeholder="Roll Number" onChange={handleChange} required />
      <input type="text" name="designation" value={formData.designation} placeholder="Designation" onChange={handleChange} required />
      <input type="number" name="year" value={formData.year} placeholder="Year of Study" onChange={handleChange} required />
      <select name="type" value={formData.type} onChange={handleChange} required>
        <option value="">Type of User</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="guest">Guest</option>
      </select>
      // In Signup or Profile.js
<label>Select your area of interest:</label>
<select name="interest" value={form.interest} onChange={handleChange}>
  <option value="Coding">Coding</option>
  <option value="Art">Art</option>
  <option value="Sports">Sports</option>
  <option value="Science">Science</option>
  <option value="Music">Music</option>
  // Add more options as needed
</select>

      <input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleChange} required />
      <input type="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}
