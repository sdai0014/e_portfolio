interface SectionLabelProps {
  text: string
}

function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="mb-5 w-fit border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#F24405] shadow-[2px_2px_0px_0px_black] dark:border-white dark:bg-black dark:shadow-[2px_2px_0px_0px_white] sm:mb-6 sm:px-4 sm:text-sm">
      {text}
    </p>
  )
}

export default SectionLabel
