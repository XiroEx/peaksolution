import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App