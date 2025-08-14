import React from "react";
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

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
         <p>SmartLink</p>
        </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <div style={{color:"#1E3AEA"}}>
        {item.icon}
            </div>
           
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-logout">
        <div className="side-barlogout-item">
          <FaPowerOff />
        <span>Logout</span>
        </div>
        
      </div>
    </div>
  );
}
