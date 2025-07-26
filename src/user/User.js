import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import UserCard from "./userCard";
import "./User.css";
import { UserDetail } from "./UserDetail";

const User = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });
  const userEditFormRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (userEditFormRef.current) {
      userEditFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [editingId]);

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError("Name and Email are required fields");
      return;
    }

    if (editingId) {
      // Update existing user
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingId ? { ...user, ...formData } : user
        )
      );
    } else {
      // Add new user
      const newUser = {
        ...formData,
        id: Math.max(...users.map((u) => u.id), 0) + 1,
      };
      setUsers((prev) => [...prev, newUser]);
    }

    // Reset form
    setFormData({ name: "", email: "", username: "", phone: "" });
    setEditingId(null);
    setError(null);
  };

  // Handle editing a user
  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      username: user.username,
      phone: user.phone,
    });
    setEditingId(user.id);
    setSelectedUser(null);
  };

  // Handle deleting a user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user.id !== id));
      if (editingId === id) setEditingId(null);
      if (selectedUser?.id === id) setSelectedUser(null);
    }
  };

  // Handle viewing user details
  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setEditingId(null);
  };

  // Handle back to list view
  const handleBackToList = () => {
    setSelectedUser(null);
  };

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="user-management-container">
      <header className="app-header">
        <h1>👥 User Management System</h1>
        {!selectedUser && (
          <div className="search-container">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        )}
      </header>

      <main className="main-content">
        {selectedUser ? (
          <UserDetail user={selectedUser} onBack={handleBackToList} />
        ) : (
          <>
            <div
              className="user-form-container"
              ref={editingId ? userEditFormRef : null}
            >
              <h2>{editingId ? "✏️ Edit User" : "➕ Add New User"}</h2>
              <form onSubmit={handleSubmit} className="user-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    {editingId ? "Update User" : "Add User"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setEditingId(null);
                        setFormData({
                          name: "",
                          email: "",
                          username: "",
                          phone: "",
                        });
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
                {error && <div className="form-error">{error}</div>}
              </form>
            </div>

            <div className="user-grid-container">
              <h2>User Directory ({filteredUsers.length})</h2>
              {filteredUsers.length === 0 ? (
                <div className="empty-state">
                  <p>No users found</p>
                </div>
              ) : (
                <div className="user-grid">
                  {filteredUsers.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onClick={handleViewDetails}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} User Management System</p>
      </footer>
    </div>
  );
};

// User Detail Component

export default User;
