function Marquee() {
  const text = 'SYSTEMS • INFRASTRUCTURE • APPLICATIONS • RELIABILITY • AUTOMATION • PROBLEM SOLVING • '

  return (
    <div className="w-full overflow-hidden whitespace-nowrap border-y-[1px] border-black bg-black py-2.5 sm:py-3">
      <div className="inline-block animate-marquee text-sm font-black uppercase tracking-wide text-white sm:text-lg lg:text-xl">
        {text.repeat(4)}
      </div>
    </div>
  )
}

export default Marquee
