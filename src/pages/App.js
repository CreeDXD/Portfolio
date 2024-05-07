import '../style/css/index.css'
import '../style/css/normalize.css'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRef } from 'react'

const App = () => {
  const nextSectionRef = useRef(null)

  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  }
  return (
    <div className="contenant">
      <div ref={nextSectionRef}></div>
      <Header />
      <Main />
      <Footer />

      <a
        href="#portfolio-content"
        className="scroll-down-arrow"
        onClick={scrollToNextSection}
      >
        &#9660;
      </a>
    </div>
  )
}

export default App
