import ProjectCard from '../components/ProjectCard'

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
    <main className="py-16 px-8 max-w-7xl mx-auto">

      <h1 className="text-[4rem] font-black uppercase leading-[0.9] tracking-tighter mb-16">
        PROJECTS<span className="text-[#F24405]">_</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>

    </main>
  )
}

export default Projects
