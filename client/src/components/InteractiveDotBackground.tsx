import * as React from 'react'

function InteractiveDotBackground() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.setProperty('--mx', `${e.clientX}px`)
      ref.current.style.setProperty('--my', `${e.clientY + window.scrollY}px`)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div ref={ref} className="interactive-dot-bg absolute inset-0 -z-10">
      <div className="dot-base absolute inset-0" />
      <div className="dot-glow absolute inset-0" />
    </div>
  )
}

export default InteractiveDotBackground
