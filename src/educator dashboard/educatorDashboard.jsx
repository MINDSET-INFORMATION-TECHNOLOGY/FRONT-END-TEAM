import Sidebar from "../student components/sidebar";
import Navbar from "../student components/navbar";
import {
  FaPlus,
  FaEye,
  FaProjectDiagram,
  FaUsers,
  FaDollarSign,
  FaStar,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./educatorDashboard.css";

function EducatorDashboard() {
  const statsData = [
    {
      title: "Active Projects",
      value: "8",
      icon: <FaProjectDiagram />,
      color: "#1E3AEA",
      bgColor: "rgba(30, 58, 234, 0.1)",
    },
    {
      title: "Students Mentored",
      value: "27",
      icon: <FaUsers />,
      color: "#10B981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      title: "Budget managed",
      value: "280k",
      icon: <FaDollarSign />,
      color: "#F59E0B",
      bgColor: "rgba(245, 158, 11, 0.1)",
    },
    {
      title: "AVERAGE RATING",
      value: "4.9",
      icon: <FaStar />,
      color: "#EF4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
    },
  ];

  const recommendedProjects = [
    {
      title: "Climate Data Analysis Project",
      status: "ACTIVE",
      statusColor: "#10B981",
      applications: "23 applications",
      budget: "₦ 25,000",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      title: "Renewable Energy Research",
      status: "REVIEW",
      statusColor: "#F59E0B",
      applications: "15 applications",
      budget: "₦ 35,000",
      image: "/placeholder.svg?height=120&width=200",
    },
  ];

  return (
    <div className="educator-dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="dashboard-content">
          {/* Welcome Section */}
          <div className="welcome-section">
            <div className="welcome-text">
              <h1>Welcome, Dr. Okonkwo!</h1>
              <p>Manage your academic projects</p>
              <div className="university-info">
                <FaMapMarkerAlt className="location-icon" />
                <span>University of Lagos</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div
                  className="stat-icon"
                  style={{
                    color: stat.color,
                    backgroundColor: stat.bgColor,
                  }}
                >
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-title">{stat.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recommended Projects Section */}
          <div className="recommended-section">
            <div className="section-header">
              <h2>Recommended for You</h2>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="projects-grid">
              {recommendedProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">
                    {/* <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                    /> */}
                    <div
                      className="project-status"
                      style={{ backgroundColor: project.statusColor }}
                    >
                      {project.status}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <div className="project-details">
                      <span className="applications">
                        {project.applications}
                      </span>
                      <span className="budget">{project.budget}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="action-btn new-project-btn">
              <FaPlus />
              <span>New Project</span>
            </button>
            <button className="action-btn applications-btn">
              <FaEye />
              <span>Applications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducatorDashboard;
