function Marquee() {
  const text = 'SYSTEMS • INFRASTRUCTURE • APPLICATIONS • RELIABILITY • AUTOMATION • PROBLEM SOLVING • '

  return (
    <div className="w-full border-y-[1px] border-black overflow-hidden whitespace-nowrap py-3 bg-black">
      <div className="inline-block animate-marquee uppercase font-black text-xl tracking-wide text-white">
        {text.repeat(4)}
      </div>
    </div>
  )
}

export default Marquee
