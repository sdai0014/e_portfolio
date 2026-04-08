interface ChipProps {
  text: string
}

function Chip({ text }: ChipProps) {
  return (
    <span className="bg-black text-white px-4 py-2 text-xs font-bold tracking-widest border-[3px] border-black">
      {text}
    </span>
  )
}

export default Chip
