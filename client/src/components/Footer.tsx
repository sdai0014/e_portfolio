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
    <footer className="grid w-full grid-cols-1 gap-8 border-t-[3px] border-black bg-white px-4 py-6 dark:border-white dark:bg-black sm:px-6 md:grid-cols-2 md:gap-12 md:px-12">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Melbourne, AU</p>
          <p className="text-3xl font-black tracking-tighter text-black dark:text-white sm:text-4xl lg:text-5xl">{time}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a href="https://github.com/sdai0014" target="_blank" rel="noreferrer" className="px-5 py-3 border-[3px] border-black dark:border-white font-black uppercase tracking-widest text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100 text-center">
            GITHUB
          </a>
          <a href="https://www.linkedin.com/in/shunlong-dai-aa73a9330/" target="_blank" rel="noreferrer" className="px-5 py-3 border-[3px] border-black dark:border-white font-black uppercase tracking-widest text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-100 text-center">
            LINKEDIN
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 md:items-end">
        <p className="text-lg font-black uppercase tracking-tighter text-black dark:text-white sm:text-xl lg:text-2xl">Copyright © 2026 Shunlong Dai.</p>
        <p className="text-lg font-black uppercase tracking-tighter text-black dark:text-white sm:text-xl lg:text-2xl">All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
