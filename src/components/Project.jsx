import Tag from './Tag'

const Project = ({ title, tags, text, photo, link }) => {
  const handleClick = (event) => {
    if (!link) {
      event.preventDefault() // Prevent default action
      alert("This project doesn't have a link yet.")
    }
  }
  return (
    <a
      href={`${link}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <div className="project">
        <img src={photo} alt={title} />
        <div className="project-details">
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tags-unit">
                <Tag tag={tag} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default Project
