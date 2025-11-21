import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      if (response.data.token) {
        // Store token in localStorage
        localStorage.setItem("adminToken", response.data.token);
        localStorage.setItem("adminUsername", response.data.username);
        
        // Redirect to dashboard
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="admin-login-header">
          <h1 className="admin-login-title">EasyPagar Admin</h1>
          <p className="admin-login-subtitle">Lead Management Dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && <div className="admin-error-message">{error}</div>}

          <div className="admin-form-group">
            <label htmlFor="username" className="admin-form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              className="admin-form-input"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="password" className="admin-form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="admin-form-input"
            />
          </div>

          <button type="submit" className="admin-login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
