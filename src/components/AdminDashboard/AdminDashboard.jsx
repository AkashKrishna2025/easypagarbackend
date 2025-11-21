import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ totalLeads: 0, todayLeads: 0 });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchLeads(token);
    fetchStats(token);

    // Refresh data every 30 seconds
    const interval = setInterval(() => {
      fetchLeads(token);
      fetchStats(token);
    }, 30000);

    return () => clearInterval(interval);
  }, [navigate]);

  const fetchLeads = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/leads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLeads(response.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/leads/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`http://localhost:5000/api/leads/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLeads(leads.filter((lead) => lead._id !== id));
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Error deleting lead");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    navigate("/admin/login");
  };

  const handleExportCSV = () => {
    const headers = ["Full Name", "Mobile Number", "Company Name", "Email", "IP Address", "Date"];
    const rows = leads.map((lead) => [
      lead.fullName,
      lead.mobileNumber,
      lead.companyName,
      lead.email,
      lead.ipAddress,
      new Date(lead.createdAt).toLocaleString(),
    ]);

    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${Date.now()}.csv`;
    a.click();
  };

  const filteredLeads = leads.filter((lead) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      lead.fullName.toLowerCase().includes(searchLower) ||
      lead.email.toLowerCase().includes(searchLower) ||
      lead.companyName.toLowerCase().includes(searchLower) ||
      lead.mobileNumber.includes(searchTerm)
    );
  });

  if (loading) {
    return (
      <div className="admin-dashboard-loading">
        <div className="spinner"></div>
        <p>Loading leads...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1>EasyPagar Admin Dashboard</h1>
          <p>Welcome, {localStorage.getItem("adminUsername") || "Admin"}</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <p className="stat-label">Total Leads</p>
            <h3 className="stat-value">{stats.totalLeads}</h3>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <p className="stat-label">Today's Leads</p>
            <h3 className="stat-value">{stats.todayLeads}</h3>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="dashboard-content">
        <div className="content-header">
          <h2>All Leads</h2>
          <div className="content-actions">
            <input
              type="text"
              placeholder="Search leads..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleExportCSV} className="export-btn">
              📥 Export CSV
            </button>
          </div>
        </div>

        {filteredLeads.length === 0 ? (
          <div className="no-leads">
            <p>No leads found</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Mobile Number</th>
                  <th>Company Name</th>
                  <th>Email</th>
                  <th>IP Address</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead._id}>
                    <td>{lead.fullName}</td>
                    <td>{lead.mobileNumber}</td>
                    <td>{lead.companyName}</td>
                    <td>{lead.email}</td>
                    <td className="ip-address">{lead.ipAddress}</td>
                    <td>{new Date(lead.createdAt).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(lead._id)}
                        className="delete-btn"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
