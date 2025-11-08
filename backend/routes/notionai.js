// backend/routes/gemini.js
const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/gemini', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );
    const reply = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || "AI error.";
    res.json({ response: reply });
  } catch (err) {
    res.status(500).json({ response: "AI error. Try again." });
  }
});
module.exports = router;
