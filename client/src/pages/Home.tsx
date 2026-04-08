import { Link } from 'react-router-dom'

function Home() {
    return (
        <section id="hero" className="min-h-[86vh] flex items-center px-24">
            <div className="flex flex-col gap-8">

                <span className="border-2 border-black px-4 py-1 text-[0.875rem] uppercase tracking-[0.2em] text-[#F24405] w-fit shadow-[2px_2px_0px_0px_black] bg-white font-bold">
                    AVAILABLE FOR HIRE — 2026
                </span>

                <h1 className="text-[10rem] font-black uppercase leading-none tracking-tighter text-black">
                    ERIC<span className="text-[#F24405]">.</span>
                </h1>

                <p className="max-w-2xl text-xl border-l-8 border-black pl-8">
                    I work across systems — from infrastructure to applications. Focused on reliability, automation, and building practical solutions.
                </p>

                <div className="flex gap-8 mt-8">
                    <Link to="/projects" className="bg-[#F24405] text-white font-black uppercase tracking-widest border-[3px] border-black px-8 py-5 text-2xl shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">
                      VIEW PROJECTS
                    </Link>
                    <Link to="/about" className="bg-white text-black font-black uppercase tracking-widest border-[3px] border-black px-8 py-5 text-2xl shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_#F24405] hover:-translate-y-[2px] transition-all duration-100">
                      ABOUT ME
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Home