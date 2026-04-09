import ProjectCard from '../components/ProjectCard'
import { TypingAnimation } from '@/components/ui/typing-animation'
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel'

interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  github: string
  live: string | null
}

const projects: Project[] = [
  {
    id: 1,
    name: 'VDI_MONITOR',
    description: 'Real-time VDI monitoring dashboard built in Kibana Canvas, visualising network health and session metrics across hundreds of endpoints.',
    tech: ['Python', 'ELK Stack', 'Kibana'],
    github: '#',
    live: null,
  },
  {
    id: 2,
    name: 'TICKET_BOT',
    description: 'Python automation integrated with ServiceNow that classifies, enriches, and auto-resolves infrastructure alerts — cutting mean time to resolution by 40%.',
    tech: ['Python', 'ServiceNow', 'REST API'],
    github: '#',
    live: null,
  },
  {
    id: 3,
    name: 'E_PORTFOLIO',
    description: 'This site. A brutalist full-stack portfolio built with React, TypeScript, and Node.js — designed with industrial-grade precision.',
    tech: ['React', 'TypeScript', 'Node.js'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    name: 'SPLUNK_ATR',
    description: "SPL query suite and Python bridge connecting Splunk alerts to Accenture's Automated Ticket Resolver, enabling zero-touch incident response.",
    tech: ['Python', 'Splunk', 'SPL'],
    github: '#',
    live: null,
  },
]

function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-2 pb-10 sm:px-6 sm:pt-3 sm:pb-14 lg:px-8 lg:pt-4 lg:pb-16">

      <h1 className="mb-6 text-center text-[3rem] font-black uppercase leading-[0.9] tracking-tighter dark:text-white sm:mb-8 sm:text-[3.8rem] lg:mb-10 lg:text-[4.6rem]">
        <TypingAnimation
          className="mx-auto text-center text-[2.2rem] font-black uppercase leading-[0.9] tracking-tighter [word-spacing:-0.2em] dark:text-white [&>span]:text-[#F24405] sm:text-[2.8rem] lg:text-[3.4rem]"
          cursorStyle="underscore"
          words={['No fluff, just projects.', 'Real ideas, real impact.', 'Fast, clean, and scalable.']}
          loop
        />
      </h1>

      <MotionCarousel
        slides={projects.map(project => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
        options={{ loop: false, align: 'center', containScroll: false }}
      />

    </main>
  )
}

export default Projects
