import SectionLabel from '../components/SectionLabel'
import Chip from '../components/Chip'
import { CopyButton } from '@/components/animate-ui/components/buttons/copy'

function AboutMe() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Python', 'Java', 'Vue',
    'Node.js', 'Spring', 'MySQL', 'MongoDB', 'Docker', 'Kubernetes',
    'AWS', 'ELK Stack', 'Splunk', 'Linux', 'Git', 'ServiceNow'
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-7">
      <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 xl:grid-cols-2 xl:gap-x-14 xl:gap-y-14">

        {/* Row 1 Left: About Me */}
        <section>
          <SectionLabel text="ABOUT ME" />
          <h1 className="mb-6 text-[2.8rem] font-black leading-[0.9] tracking-tighter text-black dark:text-white sm:mb-7 sm:text-[3.5rem] lg:text-[4rem]">
            Shunlong Dai <br /><span className="text-[#F24405]">(Eric)</span>
          </h1>
          <p className="bg-white p-4 text-sm leading-relaxed text-black shadow-[4px_4px_0px_black] border-[3px] border-black dark:bg-[#111] dark:text-white dark:border-white dark:shadow-[4px_4px_0px_white] sm:p-5">
            Hi, I'm Eric — an engineer who enjoys working across systems.<br/><br/>
            My experience spans cloud infrastructure, monitoring, and software development, where I've worked on automation, system observability, and supporting production environments.<br/><br/>
            I'm particularly interested in understanding how different parts of a system fit together — from infrastructure and backend services to the layer that users interact with. I enjoy simplifying complex problems and turning them into practical solutions.<br/><br/>
            Currently pursuing a Master of Information Technology at Monash University.
          </p>
        </section>

        {/* Row 1 Right: Contact & Skills */}
        <section className="flex flex-col gap-8 sm:gap-12">
          <div>
            <SectionLabel text="CONTACT" />
            <div className="border-[3px] border-black bg-black p-4 text-white shadow-[4px_4px_0px_black] dark:border-white dark:shadow-[4px_4px_0px_white]">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="break-all text-sm font-black uppercase underline decoration-[#F24405] decoration-[4px] underline-offset-6 sm:text-lg sm:underline-offset-8">
                  ERIC.DAI.AU@GMAIL.COM
                </span>
                <CopyButton content="eric.dai.au@gmail.com" variant="brutalist"/>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/sdai0014" target="_blank" rel="noreferrer" className="w-full py-2.5 text-xs font-black uppercase tracking-widest text-center border-[3px] border-white hover:bg-[#F24405] hover:border-[#F24405] transition-all duration-100">GITHUB</a>
                <a href="https://www.linkedin.com/in/shunlong-dai-aa73a9330/" target="_blank" rel="noreferrer" className="w-full py-2.5 text-xs font-black uppercase tracking-widest text-center border-[3px] border-white hover:bg-[#F24405] hover:border-[#F24405] transition-all duration-100">LINKEDIN</a>
                <a href="#" className="w-full py-2.5 text-xs font-black uppercase tracking-widest text-center bg-[#F24405] border-[3px] border-[#F24405] hover:bg-white hover:text-black transition-all duration-100">DOWNLOAD CV</a>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel text="SKILLS" />
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <Chip key={skill} text={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Row 2 Left: Experience */}
        <section>
          <SectionLabel text="EXPERIENCE" />
          <div className="space-y-5">
            <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-bold text-black dark:text-white">Infrastructure Engineer @ Fidelity</h3>
                <span className="text-xs font-black tracking-widest text-[#F24405]">2023 — 2024</span>
              </div>
              <ul className="space-y-3 border-l-4 border-[#F24405] pl-4 text-black dark:text-white">
                <li className="flex"><span className="mr-2">{'>'}</span><span>Developed Python automation integrated with ServiceNow to enable automated ticket handling and operational workflows.</span></li>
                <li className="flex"><span className="mr-2">{'>'}</span><span>Supported 24/7 production systems, troubleshooting incidents across ELK, Zabbix, and SCOM.</span></li>
                <li className="flex"><span className="mr-2">{'>'}</span><span>Performed ELK stack upgrades and routine maintenance to ensure system reliability and performance.</span></li>
                <li className="flex"><span className="mr-2">{'>'}</span><span>Built Kibana dashboards to monitor VDI environments and visualize real-time system and ticket data.</span></li>
              </ul>
            </div>
            <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-base font-bold text-black dark:text-white">AiOps Intern @ Accenture</h3>
                <span className="text-xs font-black tracking-widest text-[#F24405]">2021 — 2022</span>
              </div>
              <ul className="space-y-3 border-l-4 border-[#F24405] pl-4 text-black dark:text-white">
                <li className="flex"><span className="mr-2">{'>'}</span><span>Built and optimized SPL queries for reports and alerts, improving accuracy and performance.</span></li>
                <li className="flex"><span className="mr-2">{'>'}</span><span>Onboarded and managed logs from ServiceNow into Splunk, ensuring data quality and consistency.</span></li>
                <li className="flex"><span className="mr-2">{'>'}</span><span>Maintained automated reports/alerts and developed dashboards aligned with business needs.</span></li>
                <li className="flex"><span className="mr-2">{'>'}</span><span>Developed Python automation integrating Splunk with ATR to streamline incident handling and ticket resolution.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Row 2 Right: Education */}
        <section>
          <SectionLabel text="EDUCATION" />
          <div className="space-y-5">
            <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5">
              <span className="text-xs font-black tracking-widest text-[#F24405]">2024 — 2026</span>
              <h3 className="text-base font-bold mt-2 text-black dark:text-white">Master of Information Technology</h3>
              <p className="text-black dark:text-white">Monash University · GPA 3.5/4</p>
            </div>
            <div className="border-[3px] border-black bg-white p-4 shadow-[4px_4px_0px_black] transition-all duration-100 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F24405] dark:border-white dark:bg-[#111] dark:shadow-[4px_4px_0px_white] sm:p-5">
              <span className="text-xs font-black tracking-widest text-[#F24405]">2018 — 2022</span>
              <h3 className="text-base font-bold mt-2 text-black dark:text-white">Bachelor's in Computer Science</h3>
              <p className="text-black dark:text-white">Dalian University of Foreign Language · WAM 83/100</p>
              <p className="text-sm text-black/60 dark:text-white/60 mt-2">National Encouragement Scholarship 2021 & 2022</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

export default AboutMe
