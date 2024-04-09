import { socialMediaPlatforms } from '../data/data'

const Contact = () => {
  return (
    <section className="contact">
      <div>
        <h3>
          N'hésitez pas à me contacter pour toute information supplémentaire
        </h3>
      </div>
      <ul className="contact--component">
        {socialMediaPlatforms.map((platform) => (
          <li key={platform.name}>
            <img src={platform.logo} alt={`${platform.name} Logo`} />
            <p>{platform.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Contact
