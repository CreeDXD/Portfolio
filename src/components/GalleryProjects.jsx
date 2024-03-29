import Project from './Projet'
import { projects } from '../data/data'

const GalleryProjets = () => {
  return (
    <section>
      <h3>Projets</h3>
      <h1>Découvrets mon travail</h1>
      <h3>faites le tour de mes derniers projets</h3>
      <div>
        <div className="projects">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryProjets
