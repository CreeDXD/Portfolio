import '../style/css/index.css'
import '../style/css/normalize.css'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function App() {
  return (
    <div className="contenant">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
