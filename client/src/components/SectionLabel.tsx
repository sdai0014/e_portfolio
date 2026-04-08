interface SectionLabelProps {
  text: string
}

function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="uppercase tracking-[0.2em] text-sm font-black mb-6 bg-white text-[#F24405] border-2 border-black shadow-[2px_2px_0px_0px_black] px-4 py-1 w-fit">
      {text}
    </p>
  )
}

export default SectionLabel
