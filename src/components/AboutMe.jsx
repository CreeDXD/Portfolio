import { portrait } from '../data/data'

function AboutMe() {
  return (
    <div className="about_me">
      <section>
        <h1>about me</h1>
        <p>
          Hello, Je m'appel Pierre et passionné de code. Ici, vous trouverez un
          aperçu de mon parcours, de mes compétences et de mes réalisations dans
          le domaine du développement informatique. Explorez mes projets et
          n'hésitez pas à me contacter pour discuter de collaborations
          passionnantes. Merci de votre visite !
        </p>
      </section>
      <img src={portrait.path} alt={portrait.alt} />
    </div>
  )
}

export default AboutMe
