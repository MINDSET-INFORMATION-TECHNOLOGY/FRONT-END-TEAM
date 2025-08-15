import { FaBell, FaUserCircle } from "react-icons/fa";
import "./navbar.css";

function Navbar({
  userName = "Dr. Okonkwo",
  userRole = "Educator",
  university = "University of Lagos",
}) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Empty left section - no search as per PDF design */}
      </div>

      <div className="navbar-right">
        <div className="notification-container">
          <FaBell className="notification-icon" />
          <span className="notification-badge">8</span>
        </div>

        <div className="user-info">
          <div className="user-details">
            <span className="user-name">{userName}</span>
            <span className="user-role">
              {userRole} • {university}
            </span>
          </div>
          <div className="user-avatar">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
