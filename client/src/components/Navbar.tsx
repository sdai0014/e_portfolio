import { Link } from "react-router-dom"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex w-full flex-col gap-3 border-b-[3px] border-black bg-white px-4 py-3 dark:border-white dark:bg-black sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">
      <Link to="/">
        <div className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white sm:text-3xl">P<span className="text-[#F24405]">O</span>RTF<span className="text-[#F24405]">O</span>LI<span className="text-[#F24405]">O</span></div>
      </Link>
      <nav className="flex w-full flex-wrap items-center gap-2 sm:gap-3 md:w-auto md:justify-end md:gap-4">
        <Link to="/projects" className="px-3 py-2 border-[3px] border-black dark:border-white text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#F24405] shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">Projects</Link>
        <Link to="/about" className="px-3 py-2 border-[3px] border-black dark:border-white text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#F24405] shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">About Me</Link>
        <button className="bg-[#F24405] text-white border-[3px] border-black dark:border-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-[2px] transition-all duration-100">
          DOWNLOAD CV
        </button>
        <ThemeTogglerButton modes={['light', 'dark']} variant="brutalist" size="default" />
      </nav>
    </header>
  )
}

export default Navbar
