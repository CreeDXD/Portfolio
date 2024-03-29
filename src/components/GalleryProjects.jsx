import Project from './Projet'
import { projects } from '../data/data'
import { useState } from 'react'

const GalleryProjets = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section>
      <h3>Projets</h3>
      <h1>Découvrets mon travail</h1>
      <h3>faites le tour de mes derniers projets</h3>
      <div>
        {isExpanded ? (
          <div className="projects">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
            <button onClick={toggleExpansion}>Collapse</button>
          </div>
        ) : (
          <div className="projects">
            {projects.slice(0, 3).map((project, index) => (
              <Project key={index} {...project} />
            ))}
            {projects.length > 3 && (
              <button onClick={toggleExpansion}>View all</button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default GalleryProjets
