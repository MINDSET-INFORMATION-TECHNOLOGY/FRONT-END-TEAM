import { useState } from "react";
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
  FaComment,
} from "react-icons/fa";

function Nav() {
  const [name, setname] = useState("Dr nwosu");

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="text">
          <p id="welcome-text-nav">Welcome {name}</p>
        </div>
        <div className="icon-nav">
          <FaBell id="notification-icon-nav" />
          <p>
            <FaComment id="message-icon-nav" />{" "}
            <div className="circle">
              <p id="message-number">3</p>
            </div>
          </p>
          <img
            src="/src/assets/images/Profile.png"
            alt=""
            height={40}
            id="profile-img-nav"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
