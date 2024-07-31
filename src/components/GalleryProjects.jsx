import Project from './Project'
import { projects } from '../data/data'
import { useState } from 'react'
import Button from '../components/Button'

const GalleryProjets = ({ test }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  let buttonContent
  isExpanded ? (buttonContent = 'collapse') : (buttonContent = 'View all')
  const toggleExpansion = () => {
    const portfolioSection = document.getElementById('portfolio')
    portfolioSection.scrollIntoView({ behavior: 'smooth' })
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="projects--components" id="portfolio">
      <h3>Projets</h3>
      <h1>Découvre mon travail</h1>
      <h3>faites le tour de mes derniers projets</h3>
      <>
        {isExpanded ? (
          <div className="projects" ref={test}>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        ) : (
          <div className="projects">
            {projects.slice(0, 1).map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        )}
        {/* <button onClick={toggleExpansion}>{buttonContent}</button> */}

        <Button
          toggle={toggleExpansion}
          content={buttonContent}
          className="button"
        />
      </>
    </section>
  )
}

export default GalleryProjets
