import { Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="flex justify-between items-center w-full px-8 py-3 sticky top-0 z-50 bg-white border-b-[3px] border-black">
      <Link to="/">
        <div className="text-3xl font-black uppercase tracking-tighter text-black">P<span className="text-[#F24405]">O</span>RTF<span className="text-[#F24405]">O</span>LI<span className="text-[#F24405]">O</span></div>
      </Link>
      <nav className="flex gap-4 items-center">
          <Link to="/projects" className="px-4 py-2 border-[3px] border-black text-sm font-black uppercase tracking-widest text-[#F24405] shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">Projects</Link>
          <Link to="/about" className="px-4 py-2 border-[3px] border-black text-sm font-black uppercase tracking-widest text-[#F24405] shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">About Me</Link>
        <button className="bg-[#F24405] text-white border-[3px] border-black px-6 py-2 text-sm font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-[2px] transition-all duration-100">
          DOWNLOAD CV
        </button>
      </nav>
    </header>
  )
}

export default Navbar