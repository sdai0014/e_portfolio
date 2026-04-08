function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 w-full px-12 py-6 gap-12 border-t-[3px] border-black bg-white">
      <div className="flex flex-col gap-6">
        <a
          href="mailto:eric.dai.au@gmail.com"
          className="text-5xl font-black uppercase hover:text-[#F24405] hover:italic transition-all duration-100 underline decoration-[3px] underline-offset-8"
        >
          EMAIL ME
        </a>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 border-[3px] border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-100">
            GITHUB
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-6 py-3 border-[3px] border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-100">
            LINKEDIN
          </a>
        </div>
      </div>
      <div className="flex flex-col md:items-end justify-between">
        <p className="text-2xl font-black uppercase tracking-tighter">Copyright © 2026 Shunlong Dai.</p>
        <p className="text-2xl font-black uppercase tracking-tighter">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
