import { socialMediaPlatforms } from '../data/data'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div>
        <h3>
          N'hésitez pas à me contacter pour toute information supplémentaire
        </h3>
      </div>
      <ul className="contact--component">
        {socialMediaPlatforms.map((platform) => (
          <li key={platform.name}>
            <a
              href={`${platform.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={platform.logo} alt={`${platform.name} Logo`} />
              <p>{platform.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Contact
