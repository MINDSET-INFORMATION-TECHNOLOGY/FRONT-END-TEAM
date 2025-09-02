import React, { useState } from 'react';
import Sidebar from './sidebar';
import Nav from './navbar';
import TaskCard from './TaskCard';


const studentTasks = [
  {
    "project_title": "Biotechnology",
    "project_label": "Medicinal Plants Database Project",
    "supervisor": "Dr. Funmi Ongundipe",
    "categoryColor": "#366534",
    "categoryAccent": "#DCFCE7",
    "institution": "University of Ibadan",
    "objective": "Document and analyze traditional Nigerian medicinal plants to contribute to important botanical and pharmaceutical research.",
    "skills_required": [
      "Database Management",
      "Research",
      "Botany"
    ],
    "points": 600,
    "budget_naira": 25000,
    "deadline": "2 weeks",
    "category": "STEM"
  },
  {
    "project_title": "Stem Research",
    "project_label": "Climate Data Analysis Project",
    "supervisor": "Dr. Ahmed Okonkwo",
    "categoryColor": "#A61B1B",
    "categoryAccent": "#FEF2F2",
    "institution": "University of Lagos",
    "objective": "Analyze climate patterns using Python and statistical methods. Perfect for students interested in environmental science and data analysis.",
    "skills_required": [
      "Data Analysis",
      "Statistics",
      "Python"
    ],
    "points": 500,
    "budget_naira": 20000,
    "deadline": "2 weeks",
    "category": "Humanities"
  },
  {
    "project_title": "DIGITAL ARTS",
    "project_label": "Cultural Heritage Digital Archive",
    "supervisor": "Prof. Kemi Adebayo",
    "categoryColor": "#366534",
    "categoryAccent": "#DCFCE7",
    "institution": "National Museum",
    "objective": "Create digital representations of Nigerian cultural artifacts. Combine art, technology, and cultural preservation.",
    "skills_required": [
      "Digital Design",
      "Photography",
      "Cultural Studies"
    ],
    "points": 500,
    "budget_naira": 20000,
    "deadline": "3 weeks",
    "category": "Humanities"
  },
  {
    "project_title": "STEM RESEARCH",
    "project_label": "Climate Data Analysis Project",
    "supervisor": "Dr. Ahmed Okonkwo",
    "categoryColor": "#A61B1B",
    "categoryAccent": "#FEF2F2",
    "institution": "University of Lagos",
    "objective": "Analyze climate patterns using Python and statistical methods. Perfect for students interested in environmental science and data analysis.",
    "skills_required": [
      "Data Analysis",
      "Statistics",
      "Python"
    ],
    "points": 500,
    "budget_naira": 25000,
    "deadline": "2 weeks",
    "category": "STEM"
  }
];



const ongoingTask = () => {

  const categories = ["All", "STEM", "Humanities"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTasks = studentTasks.filter(
    (task) => activeCategory === "All" || task.category === activeCategory
  )


  return (
    <section className="container">
      <Sidebar />
      <div>
        <Nav/>

        <section className="task-container">
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Search"
              className="nested-input"
            />
          </div>

          <div className="options-wrapper">
            <select>
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select>
              <option>All</option>
              <option>STEM</option>
              <option>Humanities</option>
              <option>Arts</option>
            </select>
          </div>


          <div className="category-container">
            {
              categories.map((category, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`category-button ${activeCategory === category ? "active": "inactive"}`}
                >
                  {category}
                </button>
              ))
            }
          </div>

          <div className="task-wrapper">
            {
              filteredTasks.map((task, index) => (
                <TaskCard
                  task={task}
                  index={index}
                />
              ))
            }
          </div>
        </section>
      </div>
      
    </section>
  )
}

export default ongoingTask
