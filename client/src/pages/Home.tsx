import { Link } from 'react-router-dom'
import { DottedMap, type Marker } from '@/components/ui/dotted-map'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { MorphingText } from '@/components/ui/morphing-text'

type MyMarker = Marker & { label: string }

const markers: MyMarker[] = [
  { lat: -37.8136, lng: 144.9631, size: 1.2, pulse: true, label: 'Melbourne' },
]

function Home() {
  return (
        <section id="hero" className="relative flex min-h-[calc(100svh-8rem)] items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[86vh] lg:px-12 xl:px-24">
          <div className="absolute right-0 top-1/2 hidden w-[48%] -translate-y-1/2 text-black/20 dark:text-white/15 md:block lg:w-[56%] xl:w-[62%]">
            <DottedMap<MyMarker>
              dotColor="currentColor"
              dotRadius={0.4}
              markerColor="#F24405"
              markers={markers}
              pulse
              renderMarkerOverlay={({ marker, x, y, r }) => (
                <text
                  x={marker.label === 'Dalian' ? x + r + 1.5 : x}
                  y={marker.label === 'Dalian' ? y + 0.8 : y + r + 3}
                  fontSize={2.5}
                  fill="#F24405"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor={marker.label === 'Dalian' ? 'start' : 'middle'}
                >
                  {marker.label}
                </text>
              )}
            />
          </div>
            <div className="relative z-10 flex max-w-3xl flex-col gap-5 sm:gap-6 lg:gap-8">

                <span className="w-fit border-2 border-black bg-white px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#F24405] shadow-[2px_2px_0px_0px_black] dark:border-white dark:bg-black dark:shadow-[2px_2px_0px_0px_white] sm:px-4 sm:text-[0.875rem]">
                    AVAILABLE FOR HIRE — 2026
                </span>

                <h1 className="font-black leading-none tracking-tighter text-black dark:text-white">
                    <MorphingText
                      texts={['Shunlong Dai<span style="color:#F24405">.</span>', 'Or just Eric<span style="color:#F24405">.</span>']}
                      className="mx-0 max-w-none w-[9ch] h-[3.3rem] text-left text-[3.2rem] font-black leading-none tracking-tighter [word-spacing:-0.15em] text-black dark:text-white sm:w-[10ch] sm:h-[4.1rem] sm:text-[4rem] md:w-[11ch] md:h-[5rem] md:text-[5rem] lg:w-[12ch] lg:h-[6rem] lg:text-[6rem]"
                    />
                </h1>

                <p className="max-w-2xl border-l-[6px] border-black pl-4 text-base text-black dark:border-white dark:text-white sm:pl-6 sm:text-lg lg:border-l-8 lg:pl-8 lg:text-xl">
                    I work across systems — from infrastructure to applications. Focused on reliability, automation, and building practical solutions.
                </p>

                <div className="mt-4 flex flex-col items-start gap-4 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-5 lg:mt-8 lg:gap-8">
                    <Link to="/projects">
                      <InteractiveHoverButton
                        className="rounded-none border-[3px] border-black bg-[#F24405] px-5 py-3 text-base font-black uppercase tracking-[0.16em] text-white shadow-[4px_4px_0px_0px_black] dark:border-white dark:shadow-[4px_4px_0px_0px_white] sm:px-6 sm:py-4 sm:text-lg lg:px-8 lg:py-5 lg:text-2xl"
                        dotClassName="bg-white"
                        hoverClassName="text-[#F24405] bg-white"
                      >
                        VIEW PROJECTS
                      </InteractiveHoverButton>
                    </Link>
                    <Link to="/about">
                      <InteractiveHoverButton
                        className="rounded-none border-[3px] border-black bg-white px-5 py-3 text-base font-black uppercase tracking-[0.16em] text-black shadow-[4px_4px_0px_0px_black] dark:border-white dark:bg-black dark:text-white dark:shadow-[4px_4px_0px_0px_white] sm:px-6 sm:py-4 sm:text-lg lg:px-8 lg:py-5 lg:text-2xl"
                        dotClassName="bg-[#F24405]"
                        hoverClassName="text-white bg-[#F24405]"
                      >
                        ABOUT ME
                      </InteractiveHoverButton>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Home
