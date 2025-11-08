import React, { useState } from "react";

export default function Workspace() {
  const [prompt, setPrompt] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleAI(e) {
    e.preventDefault();
    setLoading(true);
    // Send prompt to your backend AI route:
    const res = await fetch("http://localhost:5000/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    // Add AI response as an editable block
    setBlocks([...blocks, { text: data.response }]);
    setPrompt("");
    setLoading(false);
  }

  function handleBlockEdit(idx, value) {
    // When student edits any block
    const updated = blocks.slice();
    updated[idx].text = value;
    setBlocks(updated);
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>AI Workspace</h1>
      <form onSubmit={handleAI} style={{ marginBottom: 20 }}>
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Describe what you want to create"
          style={{ width: 350, marginRight: 8 }}
        />
        <button type="submit" disabled={loading}>Ask AI</button>
      </form>
      <div>
        {blocks.map((block, idx) => (
          <textarea
            key={idx}
            value={block.text}
            onChange={e => handleBlockEdit(idx, e.target.value)}
            rows={block.text.split("\n").length + 1}
            style={{ width: "100%", marginBottom: 18, fontSize: 16 }}
          />
        ))}
      </div>
    </div>
  );
}
