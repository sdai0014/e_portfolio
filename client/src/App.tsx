import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import Navbar from "./components/Navbar"
import InteractiveDotBackground from "./components/InteractiveDotBackground"
import Marquee from "./components/Marquee"
import Footer from "./components/Footer"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
function Layout() {
  return (
    <div className="min-h-screen relative">
      <InteractiveDotBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Marquee />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
