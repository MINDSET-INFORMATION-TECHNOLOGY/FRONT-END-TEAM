import React from 'react'

const TaskCard = ({task, index}) => {
  return (
    <div key={index} className="task-card" style={{borderLeft: `6px solid ${task.categoryColor}`}}>
        
        <span 
            className="task-category" 
            style={{color: `${task.categoryColor}`, backgroundColor: `${task.categoryAccent}`}}
        >
            {task.project_title}
        </span>
        <h2>{task.project_label}</h2>
        <p className="task-instructor">{task.supervisor} • {task.institution}</p>
        <p className="content">{task.objective}</p>

        <div className="skills">
            {
                task.skills_required.map((skill, index) => (
                    <span key={index}>
                        {skill}
                    </span>
                ))
            }
        </div>

        <div className="task-reward">
            <span className="points">{task.points} pts</span>
            <span className="naira">&#8358;  {task.budget_naira}</span>
        </div>

        <p className="duration">Due in {task.deadline}</p>
    </div>
  )
}

export default TaskCard
