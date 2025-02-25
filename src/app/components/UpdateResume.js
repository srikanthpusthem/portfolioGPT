// src/app/components/UpdateResume.js
import { useState } from "react";

export default function UpdateResume() {
  const [resumeText, setResumeText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch("http://localhost:8000/update_resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume: resumeText })
      });
      if (!response.ok) {
        throw new Error("Failed to update resume");
      }
      const data = await response.json();
      setMessage("Resume updated successfully!");
    } catch (error) {
      console.error("Error updating resume:", error);
      setMessage("Error updating resume");
    }
  };

  return (
    <div>
      <h2>Update Resume</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Enter your updated resume details here..."
          rows={10}
          style={{ width: "100%", padding: "10px" }}
        />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Update Resume
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}