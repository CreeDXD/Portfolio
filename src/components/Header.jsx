const Header = ({ nextSectionRef }) => {
  return (
    <div className="contenu header">
      <a href="#portfolio">Mon Portfolio</a>
      <nav>
        <ul>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#mastack">Ma stack</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Me contacter</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
