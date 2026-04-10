import { motion } from 'motion/react'
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

const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

function Projects() {
  return (
    <motion.main
      className="mx-auto max-w-7xl px-4 pt-4 pb-10 sm:px-6 sm:pt-1 sm:pb-14 lg:px-8 lg:pt-2 lg:pb-16"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >

      <motion.div variants={sectionVariants}>
        <h1 className="mb-6 h-[3.8rem] text-center text-[3rem] font-black uppercase leading-[0.9] tracking-tighter dark:text-white sm:hidden">
          <TypingAnimation
            className="mx-auto block w-[14ch] whitespace-pre-line text-center text-[2rem] font-black uppercase leading-[1.2] tracking-tighter [word-spacing:-0.2em] dark:text-white [&>span]:text-[#F24405]"
            cursorStyle="underscore"
            words={[
              'No fluff,\njust projects.',
              'Real ideas,\nreal impact.',
              'Fast, clean,\nand scalable.',
            ]}
            loop
          />
        </h1>

        <h1 className="mb-3 hidden text-center text-[3.8rem] font-black uppercase leading-[0.9] tracking-tighter dark:text-white sm:block lg:mb-4 lg:text-[4.6rem]">
          <TypingAnimation
            className="mx-auto text-center text-[2.8rem] font-black uppercase leading-[0.9] tracking-tighter [word-spacing:-0.2em] dark:text-white [&>span]:text-[#F24405] lg:text-[3.4rem]"
            cursorStyle="underscore"
            words={['No fluff, just projects.', 'Real ideas, real impact.', 'Fast, clean, and scalable.']}
            loop
          />
        </h1>
      </motion.div>

      <motion.div variants={sectionVariants}>
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
      </motion.div>

    </motion.main>
  )
}

export default Projects
