// pages/admin.js
"use client"
import { useState } from "react";
import UpdateResume from "../components/UpdateResume"; // adjust the path based on your directory structure

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Use a simple password check here.
    // In production, consider a proper authentication solution.
    if (password === "mySecretPassword") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="admin-password">Password:</label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", width: "100%", padding: "0.5rem", margin: "1rem 0" }}
          />
          <button type="submit" style={{ padding: "0.5rem 1rem" }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Admin Dashboard</h1>
      {/* You can include your resume update component or other admin functions here */}
      <UpdateResume />
    </div>
  );
}