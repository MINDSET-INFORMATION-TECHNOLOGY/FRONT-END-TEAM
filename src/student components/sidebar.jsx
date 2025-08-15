import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaEnvelope,
  FaBell,
  FaTasks,
  FaNewspaper,
  FaChartBar,
  FaUpload,
  FaUser,
  FaPowerOff,
     
} from "react-icons/fa";


export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Notification", icon: <FaBell /> },
    { name: "Ongoing Task", icon: <FaTasks /> },
    { name: "News feed", icon: <FaNewspaper /> },
    { name: "Leaderboard", icon: <FaChartBar /> },
    { name: "Submissions", icon: <FaUpload /> },
    { name: "View profile", icon: <FaUser /> },
  ];

  const navigate = useNavigate();

  // Simulate logout and redirect to Create Account page
  const handleLogout = () => {
    // Here you would clear auth state, tokens, etc.
    navigate('/create-account');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
         <p>SmartLink</p>
        </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link ? item.link : '#'}
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <div style={{color:"#1E3AEA"}}>
                {item.icon}
              </div>
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar-logout">
        <button
          className="side-barlogout-item"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', fontSize: '1rem', padding: 0 }}
          onClick={handleLogout}
        >
          <FaPowerOff />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
