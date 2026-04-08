import SectionLabel from '../components/SectionLabel'
import Chip from '../components/Chip'

function AboutMe() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Python', 'Java', 'Vue',
    'Node.js', 'Spring', 'MySQL', 'MongoDB', 'Docker', 'Kubernetes',
    'AWS', 'ELK Stack', 'Splunk', 'Linux', 'Git', 'ServiceNow'
  ]

  return (
    <main className="py-14 px-7 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-x-14 gap-y-14 items-start">

        {/* Row 1 Left: About Me */}
        <section>
          <SectionLabel text="ABOUT ME" />
          <h1 className="text-[4rem] font-black leading-[0.9] tracking-tighter mb-7">
            Shunlong Dai <br /><span className="text-[#F24405]">(Eric)</span>
          </h1>
          <p className="text-lg leading-relaxed">
            Engineer with hands-on experience across cloud infrastructure, monitoring, and software development. I’ve worked on building automation, improving system observability, and supporting production environments at scale using tools. I enjoy understanding how systems work end-to-end — from backend services and infrastructure to the user-facing layer — and turning complex problems into practical solutions. Currently pursuing a Master of Information Technology at Monash University.
          </p>
        </section>

        {/* Row 1 Right: Contact */}
        <section>
          <SectionLabel text="CONTACT" />
          <div className="border-[3px] border-black bg-black text-white shadow-[4px_4px_0px_black] p-5">
            <a href="mailto:eric.dai.au@gmail.com" className="text-xl font-black uppercase underline decoration-[#F24405] decoration-[4px] underline-offset-8 block mb-6">
              ERIC.DAI.AU@GMAIL.COM
            </a>
            <div className="flex flex-col gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-full py-3 text-sm font-black uppercase tracking-widest text-center border-[3px] border-white hover:bg-[#F24405] hover:border-[#F24405] transition-all duration-100">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-full py-3 text-sm font-black uppercase tracking-widest text-center border-[3px] border-white hover:bg-[#F24405] hover:border-[#F24405] transition-all duration-100">LINKEDIN</a>
              <a href="#" className="w-full py-3 text-sm font-black uppercase tracking-widest text-center bg-[#F24405] border-[3px] border-[#F24405] hover:bg-white hover:text-black transition-all duration-100">DOWNLOAD CV</a>
            </div>
          </div>
        </section>

        {/* Row 2 Left: Experience */}
        <section>
          <SectionLabel text="EXPERIENCE" />
          <div className="space-y-5">
            <div className="border-[3px] border-black bg-white shadow-[4px_4px_0px_black] p-5 hover:shadow-[8px_8px_0px_#F24405] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100">
              <div className="flex justify-between mb-4">
                <h3 className="text-base font-bold">Infrastructure Engineer @ Fidelity</h3>
                <span className="text-xs font-black text-[#F24405] tracking-widest">2023 — 2024</span>
              </div>
              <ul className="space-y-3 border-l-4 border-[#F24405] pl-4">
                <li>Built Python automation integrated with ServiceNow for automated ticket handling and enrichment.</li>
                <li>Designed and implemented a VDI monitoring dashboard in Kibana Canvas with real-time network status.</li>
                <li>Planned and executed ELK stack upgrades and routine maintenance across the logging platform.</li>
              </ul>
            </div>
            <div className="border-[3px] border-black bg-white shadow-[4px_4px_0px_black] p-5 hover:shadow-[8px_8px_0px_#F24405] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100">
              <div className="flex justify-between mb-4">
                <h3 className="text-base font-bold">AiOps Intern @ Accenture</h3>
                <span className="text-xs font-black text-[#F24405] tracking-widest">2021 — 2022</span>
              </div>
              <ul className="space-y-3 border-l-4 border-black pl-4">
                <li>Created and optimized SPL queries for Splunk reports and alerts.</li>
                <li>Developed Python automation scripts integrating Splunk with Accenture's Automated Ticket Resolver (ATR).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Row 2 Right: Skills */}
        <section>
          <SectionLabel text="SKILLS" />
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Chip key={skill} text={skill} />
            ))}
          </div>
        </section>

        {/* Row 3 Left: Education */}
        <section>
          <SectionLabel text="EDUCATION" />
          <div className="space-y-5">
            <div className="border-[3px] border-black bg-white shadow-[4px_4px_0px_black] p-5 hover:shadow-[8px_8px_0px_#F24405] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100">
              <span className="text-xs font-black text-[#F24405] tracking-widest">2024 — 2026</span>
              <h3 className="text-base font-bold mt-2">Master of Information Technology</h3>
              <p>Monash University · GPA 3.5/4</p>
            </div>
            <div className="border-[3px] border-black bg-white shadow-[4px_4px_0px_black] p-5 hover:shadow-[8px_8px_0px_#F24405] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-100">
              <span className="text-xs font-black text-[#F24405] tracking-widest">2018 — 2022</span>
              <h3 className="text-base font-bold mt-2">Bachelor's in Computer Science</h3>
              <p>Dalian University of Foreign Language · WAM 83/100</p>
              <p className="text-sm text-black/60 mt-2">National Encouragement Scholarship 2021 & 2022</p>
            </div>
          </div>
        </section>

        {/* Row 3 Right: empty */}
        <div />

      </div>
    </main>
  )
}

export default AboutMe
