interface ProjectCardProps {
  name: string
  description: string
  tech: string[]
  github: string
  live: string | null
}

function ProjectCard({ name, description, tech, github, live }: ProjectCardProps) {
  return (
    <div className="min-h-[20rem] bg-white dark:bg-[#111] border-[3px] border-black dark:border-white p-3 shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white] hover:shadow-[8px_8px_0px_0px_#F24405] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100 sm:min-h-[22rem]">
      <div className="flex h-full flex-col gap-3">
        <div className="aspect-[16/8.5] w-full border-[3px] border-black dark:border-white bg-[#eeeeee] dark:bg-[#222] flex items-center justify-center">
          <span className="text-[0.55rem] font-black uppercase tracking-widest text-black/30 dark:text-white/30 sm:text-[0.6rem]">{name}</span>
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <h2 className="mb-1 text-[1rem] font-black uppercase text-black dark:text-white sm:text-[1.15rem]">{name}</h2>
          <p className="mb-3 text-[0.92rem] leading-relaxed text-black dark:text-white sm:text-[1rem]">{description}</p>
          <div className="mt-auto flex flex-wrap gap-1.5">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="bg-[#F24405] text-white border-[3px] border-black dark:border-white px-2.5 py-1 font-black uppercase tracking-tighter shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_white] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100 text-[0.6rem] sm:text-[0.65rem]"
            >
              GITHUB REPO
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="bg-white dark:bg-black text-black dark:text-white border-[3px] border-black dark:border-white px-2.5 py-1 font-black uppercase tracking-tighter shadow-[3px_3px_0px_0px_black] dark:shadow-[3px_3px_0px_0px_white] hover:bg-[#F24405] hover:text-white hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100 text-[0.6rem] sm:text-[0.65rem]"
              >
                LIVE SITE
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
