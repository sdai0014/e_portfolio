import * as React from 'react'
import { Link } from "react-router-dom"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"
import CVDownloadDialog from './CVDownloadDialog'

function Navbar() {
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-[3px] border-black bg-white dark:border-white dark:bg-black">

        {/* Main bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">
          <div className="flex items-center gap-3">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border-[3px] border-black bg-white shadow-[3px_3px_0px_0px_black] dark:border-white dark:bg-black dark:shadow-[3px_3px_0px_0px_white] transition-all duration-100 hover:shadow-[5px_5px_0px_0px_#F24405] md:hidden"
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] w-5 bg-black dark:bg-white transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-5 bg-black dark:bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-5 bg-black dark:bg-white transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>

            <Link to="/" onClick={() => setMenuOpen(false)}>
              <div className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white sm:text-3xl">
                P<span className="text-[#F24405]">O</span>RTF<span className="text-[#F24405]">O</span>LI<span className="text-[#F24405]">O</span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 md:flex">
            <Link to="/projects" className="px-3 py-2 border-[3px] border-black dark:border-white text-sm font-black uppercase tracking-[0.2em] text-[#F24405] shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">Projects</Link>
            <Link to="/about" className="px-3 py-2 border-[3px] border-black dark:border-white text-sm font-black uppercase tracking-[0.2em] text-[#F24405] shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">About Me</Link>
            <button
              onClick={() => setDialogOpen(true)}
              className="bg-[#F24405] text-white border-[3px] border-black dark:border-white px-6 py-2 text-sm font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-[2px] transition-all duration-100">
              DOWNLOAD CV
            </button>
            <ThemeTogglerButton modes={['light', 'dark']} variant="brutalist" size="default" />
          </nav>

          {/* Mobile right side */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeTogglerButton modes={['light', 'dark']} variant="brutalist" size="default" />
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <nav className="flex flex-col border-t-[3px] border-black dark:border-white md:hidden">
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="border-b-[3px] border-black dark:border-white px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#F24405]"
            >
              Projects
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="border-b-[3px] border-black dark:border-white px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#F24405]"
            >
              About Me
            </Link>
            <button
              onClick={() => { setMenuOpen(false); setDialogOpen(true) }}
              className="px-6 py-4 text-left text-sm font-black uppercase tracking-[0.2em] text-white bg-[#F24405]"
            >
              Download CV
            </button>
          </nav>
        )}
      </header>

      <CVDownloadDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}

export default Navbar
