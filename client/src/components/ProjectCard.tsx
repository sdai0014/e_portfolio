import Chip from './Chip'

interface ProjectCardProps {
  name: string
  description: string
  tech: string[]
  github: string
  live: string | null
}

function ProjectCard({ name, description, tech, github, live }: ProjectCardProps) {
  return (
    <div className="bg-white border-[3px] border-black p-5 shadow-[4px_4px_0px_0px_black] hover:shadow-[8px_8px_0px_0px_#F24405] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100">
      <div className="flex gap-5">
        {/* Image */}
        <div className="w-2/5 flex-shrink-0 aspect-video border-[3px] border-black bg-[#eeeeee] flex items-center justify-center self-start">
          <span className="text-[0.6rem] font-black uppercase tracking-widest text-black/30">{name}</span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tech.map(t => (
              <Chip key={t} text={t} />
            ))}
          </div>
          <h2 className="text-lg font-black uppercase mb-1">{name}</h2>
          <p className="text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="bg-[#F24405] text-white border-[3px] border-black px-3 py-1.5 font-black uppercase tracking-tighter shadow-[3px_3px_0px_0px_black] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100 text-xs"
            >
              GITHUB REPO
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black border-[3px] border-black px-3 py-1.5 font-black uppercase tracking-tighter shadow-[3px_3px_0px_0px_black] hover:bg-[#F24405] hover:text-white hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100 text-xs"
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
