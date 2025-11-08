// components/LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/login", { email, password });
      alert(res.data.message || "Login successful!");
      // Handle login state here
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" value={email} placeholder="Email Address" onChange={e => setEmail(e.target.value)} required />
      <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}
