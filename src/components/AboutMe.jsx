import { portrait } from '../data/data'

function AboutMe() {
  return (
    <div className="about_me" id="aboutme">
      <section>
        <h1>About me</h1>
        <h3>
          Web developer - passioné d'escalade et de volleyball - toujours
          souriant et prêt pour de nouvelles aventures
        </h3>
        <p>
          Hello, Je m'appelle Pierre et je suis passionné de code. Ici, vous
          trouverez un aperçu de mon parcours, de mes compétences et de mes
          réalisations dans le domaine du développement informatique. Explorez
          mes projets et n'hésitez pas à me contacter pour discuter de
          collaborations passionnantes. Merci de votre visite !
        </p>
      </section>
      <img src={portrait.path} alt={portrait.alt} />
    </div>
  )
}

export default AboutMe
