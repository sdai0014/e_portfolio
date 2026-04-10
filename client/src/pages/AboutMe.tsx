import * as React from 'react'
import { motion } from 'motion/react'
import SectionLabel from '../components/SectionLabel'
import { CopyButton } from '@/components/animate-ui/components/buttons/copy'

type SkillNode = {
  name: string
  children?: SkillNode[]
}

const skillTree: SkillNode[] = [
  {
    name: 'Frontend',
    children: [
      { name: 'React' }, { name: 'Vue' }, { name: 'TypeScript' },
      { name: 'JavaScript' }, { name: 'HTML/CSS' },
    ],
  },
  {
    name: 'Backend',
    children: [
      { name: 'Java' }, { name: 'Spring' }, { name: 'Spring MVC' },
      { name: 'Express' }, { name: 'Python' }, { name: 'MyBatis' },
    ],
  },
  {
    name: 'Data',
    children: [
      { name: 'MySQL' }, { name: 'MongoDB' }, { name: 'Oracle' },
    ],
  },
  {
    name: 'Cloud & Infra',
    children: [
      { name: 'AWS' }, { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Linux' },
      {
        name: 'Observability',
        children: [
          { name: 'Splunk' }, { name: 'ELK Stack' }, { name: 'Zabbix' }, { name: 'Microsoft SCOM' },
        ],
      },
    ],
  },
]

type TreeNodeProps = {
  node: SkillNode
  depth?: number
}

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

const cardStackVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

function TreeNode({ node, depth = 0 }: TreeNodeProps) {
  const [open, setOpen] = React.useState(true)
  const isFolder = node.children && node.children.length > 0

  return (
    <div>
      {isFolder ? (
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1 text-left w-fit"
        >
          <span className="text-[#F24405] text-xs w-3 shrink-0">{open ? '▾' : '▸'}</span>
          <span className="text-xs font-black uppercase tracking-widest text-[#F24405]">{node.name}</span>
        </button>
      ) : (
        <div className="flex items-center gap-1">
          <span className="text-xs text-black/30 dark:text-white/30 w-3 shrink-0">—</span>
          <span className="text-xs text-black dark:text-white">{node.name}</span>
        </div>
      )}

      {isFolder && open && (
        <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-black/20 dark:border-white/20 pl-2">
          {node.children!.map(child => (
            <TreeNode key={child.name} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function AboutMe() {
  return (
    <motion.main
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-7"
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col gap-10 sm:gap-14">

        {/* Top: bio | skill tree */}
        <motion.div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2" variants={sectionVariants}>

          {/* Left: Bio */}
          <section className="flex flex-col">
            <SectionLabel text="ABOUT ME" />
            <h1 className="mb-6 text-[2.8rem] font-black leading-[0.9] tracking-tighter text-black dark:text-white sm:mb-7 sm:text-[3.5rem] lg:text-[4rem]">
              Shunlong Dai <br /><span className="text-[#F24405]">(Eric)</span>
            </h1>
            <p className="mt-6 bg-white p-4 text-sm leading-relaxed text-black shadow-[4px_4px_0px_black] border-[3px] border-black dark:bg-[#111] dark:text-white dark:border-white dark:shadow-[4px_4px_0px_white] sm:p-5">
              Hi, I'm Eric — an engineer who enjoys working across systems.<br/><br/>
              My experience spans cloud infrastructure, monitoring, and software development, where I've worked on automation, system observability, and supporting production environments.<br/><br/>
              I'm particularly interested in understanding how different parts of a system fit together — from infrastructure and backend services to the layer that users interact with. I enjoy simplifying complex problems and turning them into practical solutions.<br/><br/>
              Currently pursuing a Master of Information Technology at Monash University.
            </p>
          </section>

          {/* Right: Contact + Skill tree */}
          <section className="flex flex-col gap-10">
            <div>
              <SectionLabel text="CONTACT" />
              <div className="border-[3px] border-black bg-black p-4 text-white shadow-[4px_4px_0px_#F24405] dark:border-white dark:shadow-[4px_4px_0px_white]">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="min-w-0 flex-1 break-all text-sm font-black uppercase underline decoration-[#F24405] decoration-[4px] underline-offset-6 sm:text-lg sm:underline-offset-8">
                    ERIC.DAI.AU@GMAIL.COM
                  </span>
                  <CopyButton content="eric.dai.au@gmail.com" variant="brutalist" />
                </div>
                <div className="flex flex-col gap-3">
                  <a href="https://github.com/sdai0014" target="_blank" rel="noreferrer" className="w-full py-2.5 text-xs font-black uppercase tracking-widest text-center border-[3px] border-white hover:bg-[#F24405] hover:border-[#F24405] transition-all duration-100">GITHUB</a>
                  <a href="https://www.linkedin.com/in/shunlong-dai-aa73a9330/" target="_blank" rel="noreferrer" className="w-full py-2.5 text-xs font-black uppercase tracking-widest text-center border-[3px] border-white hover:bg-[#F24405] hover:border-[#F24405] transition-all duration-100">LINKEDIN</a>
                </div>
              </div>
            </div>
            <div>
            <SectionLabel text="SKILLS" />
            <div className="border-[3px] border-black bg-white p-5 shadow-[4px_4px_0px_black] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] overflow-x-auto">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 xl:flex xl:gap-8">
                {skillTree.map(node => (
                  <TreeNode key={node.name} node={node} />
                ))}
              </div>
            </div>
            </div>
          </section>

        </motion.div>

        {/* Bottom: Experience + Education */}
        <motion.div className="grid grid-cols-1 items-start gap-8 sm:gap-10 xl:grid-cols-2 xl:gap-x-14" variants={sectionVariants}>

          {/* Experience */}
          <section>
            <SectionLabel text="EXPERIENCE" />
            <motion.div className="space-y-5" variants={cardStackVariants}>
              <motion.div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5" variants={cardVariants}>
                <div className="mb-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/fidelity_international_logo.jpg" alt="Fidelity" className="h-8 object-contain" />
                      <span className="text-base font-black tracking-wide text-black dark:text-white">Fidelity International</span>
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#F24405]">2023 — 2024</span>
                  </div>
                  <br />
                  <h3 className="text-base font-bold text-black dark:text-white">Infrastructure Engineer <span className="text-xs font-normal text-black/50 dark:text-white/50">Full-Time</span></h3>
                </div>
                <ul className="space-y-3 border-l-4 border-[#F24405] pl-4 text-black dark:text-white">
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Developed Python automation integrated with ServiceNow to enable automated ticket handling and operational workflows.</span></li>
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Supported 24/7 production systems, troubleshooting incidents across ELK, Zabbix, and SCOM.</span></li>
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Performed ELK stack upgrades and routine maintenance to ensure system reliability and performance.</span></li>
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Built Kibana dashboards to monitor VDI environments and visualize real-time system and ticket data.</span></li>
                </ul>
              </motion.div>
              <motion.div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5" variants={cardVariants}>
                <div className="mb-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/accenture_logo.jpg" alt="Accenture" className="h-8 object-contain" />
                      <span className="text-base font-black tracking-wide text-black dark:text-white">Accenture</span>
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#F24405]">2021 — 2022</span>
                  </div>
                  <br />
                  <h3 className="text-base font-bold text-black dark:text-white">AiOps Intern <span className="text-xs font-normal text-black/50 dark:text-white/50">Full-Time</span></h3>
                </div>
                <ul className="space-y-3 border-l-4 border-[#F24405] pl-4 text-black dark:text-white">
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Built and optimized SPL queries for reports and alerts, improving accuracy and performance.</span></li>
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Onboarded and managed logs from ServiceNow into Splunk, ensuring data quality and consistency.</span></li>
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Maintained automated reports/alerts and developed dashboards aligned with business needs.</span></li>
                  <li className="flex"><span className="mr-2">{'>'}</span><span>Developed Python automation integrating Splunk with ATR to streamline incident handling and ticket resolution.</span></li>
                </ul>
              </motion.div>
            </motion.div>
          </section>

          {/* Education */}
          <section>
            <SectionLabel text="EDUCATION" />
            <motion.div className="space-y-5" variants={cardStackVariants}>
              <motion.div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5" variants={cardVariants}>
                <span className="text-xs font-black tracking-widest text-[#F24405]">2024 — 2026</span>
                <h3 className="text-base font-bold mt-2 text-black dark:text-white">Master of Information Technology</h3><br />
                <p className="text-black dark:text-white">Monash University</p><br />
                <p className="text-black dark:text-white">· GPA 3.5/4</p>
              </motion.div>
              <motion.div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5" variants={cardVariants}>
                <span className="text-xs font-black tracking-widest text-[#F24405]">2018 — 2022</span>
                <h3 className="text-base font-bold mt-2 text-black dark:text-white">Bachelor's in Computer Science</h3><br />
                <p className="text-black dark:text-white">Dalian University of Foreign Language</p><br />
                <p className="text-black dark:text-white">· WAM 83/100</p>
              </motion.div>
            </motion.div>
          </section>

        </motion.div>
      </div>
    </motion.main>
  )
}

export default AboutMe
