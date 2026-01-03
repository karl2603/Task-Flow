import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="logo-text">TaskFlow</span>
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/task/1" className="nav-item">Task Details</Link>
          </li>
        </ul>

        <div className="nav-action">
          <Link to="/add" className="add-task-btn">Add Task</Link>
          <div className="profile-pic">Karl</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
