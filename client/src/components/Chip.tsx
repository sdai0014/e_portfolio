interface ChipProps {
  text: string
}

function Chip({ text }: ChipProps) {
  return (
    <span className="border-[3px] border-black bg-black px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.16em] text-white dark:border-white dark:bg-white dark:text-black sm:px-4 sm:py-2 sm:text-xs">
      {text}
    </span>
  )
}

export default Chip
