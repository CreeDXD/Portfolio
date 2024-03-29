import React from 'react'

const Project = ({ title, tags, text, photo }) => {
  return (
    <div className="project">
      <img src={photo} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
