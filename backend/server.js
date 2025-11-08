// server.js
require('dotenv').config();
const apiKey = process.env.GOOGLE_GEMINI_KEY;

const notionaiRoutes = require('./routes/notionai');
app.use('/api', notionaiRoutes);


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = []; // Store users as objects in memory

app.post("/register", (req, res) => {
  const { name, rollNo, designation, year, type, email, password } = req.body;
  if (!name || !rollNo || !designation || !year || !type || !email || !password) {
    return res.status(400).json({ message: "Missing fields!" });
  }
  const userObj = { name, rollNo, designation, year, type, email, password };
  users.push(userObj); // Store user
  res.json({ message: "Registration successful", user: userObj });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: "Login successful!", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
