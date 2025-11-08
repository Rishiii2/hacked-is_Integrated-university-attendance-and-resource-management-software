import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    setLoginSuccess(null);
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Logged in successfully!");
        setLoginSuccess(true);
        // Optionally: localStorage.setItem('token', data.token);
      } else {
        setMessage(data.message || "Login failed.");
        setLoginSuccess(false);
      }
    } catch (err) {
      setMessage("Error connecting to server.");
      setLoginSuccess(false);
    }
    setIsLoading(false);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>
      {message && (
        <div style={{ color: loginSuccess === true ? "green" : "red", marginTop: "1em" }}>{message}</div>
      )}
    </form>
  );
}

export default Login;
