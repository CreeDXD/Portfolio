import '../style/css/index.css'
import '../style/css/normalize.css'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => {
  const scrollToContent = () => {
    const content = document.getElementById('portfolio-content')
    content.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="contenant">
      <Header />
      <Main />
      <Footer />
      <a
        href="#portfolio-content"
        className="scroll-down-arrow"
        onClick={scrollToContent}
      >
        &#9660;
      </a>
    </div>
  )
}

export default App
