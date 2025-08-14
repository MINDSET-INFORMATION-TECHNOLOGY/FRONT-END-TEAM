import { useState } from "react"
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
  FaComment
} from "react-icons/fa";
import {  FaMedal, FaGraduationCap, FaStar } from "react-icons/fa";

function Content() {
const [name,setname]=useState("Dr nwosu")
 const stats = [
    { id: 1, icon: <FaTasks />, value: "12", label: "TASKS COMPLETED", bg: "white" },
    { id: 2, icon: <FaGraduationCap />, value: "2,850", label: "LEARNING POINTS",  bg: "white" },
    { id: 3, icon: <FaMedal />, value: "5", label: "BADGES EARNED",bg: "white" },
    { id: 4, icon: <FaStar />, value: "4.8", label: "AVERAGE RATING", bg: "white" },
  ];
  return (
    <div className="content-studentdashboard">
        <div className="welcome-b-container">
 <div className="welcome-box">
    <h2 id="welcome-message-box">Welcome,Peter</h2>
    <p>Ready to earn & learn?</p>
        </div>
       

        </div>
      <div className="stats-container">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-box" style={{ backgroundColor: stat.bg }}>
          <div className="stat-icon">{stat.icon}</div>
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Content
