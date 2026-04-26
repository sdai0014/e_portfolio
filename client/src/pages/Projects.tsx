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
  image?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'PORTFOLIO_MVP',
    description: 'Personal investment dashboard aggregating live Interactive Brokers equity positions and Binance crypto holdings into a single view — with real-time P&L, asset allocation charts, and AUD / USD / CNY currency switching.',
    tech: ['Vue.js', 'TypeScript', 'IBKR API', 'Binance API'],
    github: 'https://github.com/sdai0014/Portfolio_MVP_Demo',
    live: 'https://portfolio-mvp-demo.pages.dev/overview',
    image: '/portfolio-mvp-preview.png',
  },
  {
    id: 2,
    name: 'NUTRIMAN',
    description: "Men's nutrition web app featuring a searchable food macro database, recipe browser with user ratings, and AI-powered daily health tips delivered via Cloud Functions — all backed by Firebase auth and real-time data.",
    tech: ['Vue.js', 'Firebase', 'Cloud Functions'],
    github: 'https://github.com/sdai0014/Nutriman',
    live: 'https://nutriman.pages.dev',
    image: '/nutriman-preview.png',
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
              github={project.github}
              live={project.live}
              image={project.image}
            />
          ))}
          options={{ loop: false, align: 'center', containScroll: false }}
        />
      </motion.div>

    </motion.main>
  )
}

export default Projects
