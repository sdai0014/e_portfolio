import { useState, useEffect } from 'react'

function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Melbourne',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(now)
    }

    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 w-full px-12 py-6 gap-12 border-t-[3px] border-black bg-white">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-1">Melbourne, AU</p>
          <p className="text-5xl font-black tracking-tighter">{time}</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/sdai0014" target="_blank" rel="noreferrer" className="px-6 py-3 border-[3px] border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-100">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/shunlong-dai-aa73a9330/" target="_blank" rel="noreferrer" className="px-6 py-3 border-[3px] border-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-100">
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
