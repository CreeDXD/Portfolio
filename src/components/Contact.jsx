import socialMediaPlatforms from '../data/data'

const Contact = () => {
  return (
    <div className="contact">
      <ul>
        {socialMediaPlatforms.map((platform) => (
          <li key={platform.name}>
            <img src={platform.logo} alt={`${platform.name} Logo`} />
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Contact
