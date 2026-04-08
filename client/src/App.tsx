import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Marquee from "./components/Marquee"
import Footer from "./components/Footer"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white" style={{
        backgroundImage: 'radial-gradient(#D9CEC1 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px'
      }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Marquee />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
