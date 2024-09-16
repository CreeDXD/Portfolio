const Header = ({ nextSectionRef }) => {
  return (
    <div className="contenu header">
      <a href="#portfolio">My Portfolio</a>
      <nav>
        <ul>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#mastack">My stack</a>
          </li>
          <li className="secondportfolio">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contacte me</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
