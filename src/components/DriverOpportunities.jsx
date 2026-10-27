import { ArrowUpRight, Truck, Users, Check } from 'lucide-react'

const opportunities = [
  {
    number: '01',
    label: 'INDEPENDENT ON THE ROAD',
    title: 'SOLO',
    subtitle: 'DRIVERS',
    description:
      'Take pride in every mile. We are looking for dependable solo drivers who value safety, communication, and delivering freight on time.',
    icon: Truck,
    features: [
      'Flatbed freight opportunities',
      'Experience preferred',
      'Training available',
    ],
  },
  {
    number: '02',
    label: 'TWO DRIVERS. ONE MISSION.',
    title: 'TEAM',
    subtitle: 'DRIVERS',
    description:
      'Move freight together. We are recruiting two-person driving teams ready to work with a growing, family-owned transportation company.',
    icon: Users,
    features: [
      'Two-person driving teams',
      'Safety-first operations',
      'Dependable freight delivery',
    ],
  },
]

export default function DriverOpportunities() {
  return (
    <section
      id="opportunities"
      className="overflow-hidden bg-[#EDE9E1] text-[#172329]"
    >
      <div className="mx-auto max-w-[1600px] px-5 pb-12 pt-24 sm:px-10 lg:px-16 lg:pt-32">
        <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#C84C27]">
          <span className="h-2 w-2 bg-[#C84C27]" />
          Opportunities / Houston, TX
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <h2 className="text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase leading-[0.83] tracking-[-0.085em]">
            FIND YOUR
            <br />
            <span className="text-[#C84C27]">LANE.</span>
          </h2>

          <p className="max-w-sm text-base leading-relaxed text-[#536067] lg:pb-2">
            Different drivers. One standard of integrity.
            We're growing our fleet and looking for people
            who take the responsibility of the road seriously.
          </p>
        </div>
      </div>

      <div className="grid border-y border-[#172329]/20 lg:grid-cols-2">
        {opportunities.map((job, index) => {
          const Icon = job.icon

          return (
            <article
              key={job.title}
              className={`group relative flex flex-col px-5 py-12 transition-colors duration-300 hover:bg-[#E2DDD3] sm:px-10 lg:min-h-[580px] lg:px-16 lg:py-16 ${
                index === 0
                  ? 'border-b border-[#172329]/20 lg:border-b-0 lg:border-r'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-black tracking-[0.2em] text-[#C84C27]">
                  {job.number} / {job.label}
                </span>
                <Icon
                  size={30}
                  strokeWidth={1.4}
                  className="text-[#C84C27]"
                />
              </div>

              <div className="mt-16 lg:mt-20">
                <h3 className="text-[clamp(4.5rem,9vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.09em]">
                  {job.title}
                </h3>
                <p className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  {job.subtitle}
                </p>

                <p className="mt-7 max-w-md text-base leading-relaxed text-[#536067]">
                  {job.description}
                </p>
              </div>

              <div className="mt-10 border-t border-[#172329]/20 pt-6">
                {job.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 py-2 text-sm font-semibold"
                  >
                    <Check size={16} className="text-[#C84C27]" />
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#apply"
                className="mt-10 flex min-h-14 w-fit items-center gap-8 bg-[#172329] px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#C84C27]"
              >
                Apply as {job.title === 'SOLO' ? 'Solo Driver' : 'Team Driver'}
                <ArrowUpRight size={19} />
              </a>
            </article>
          )
        })}
      </div>

      <div className="bg-[#C84C27] px-5 py-6 text-[#fffaf2] sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1472px] flex-wrap items-center justify-between gap-4">
          <p className="text-lg font-black uppercase tracking-tight sm:text-2xl">
            $1,500–$2,000 / WEEK
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.12em]">
            Immediate Hiring · Sign-On Bonus Available
          </p>
        </div>
      </div>
    </section>
  )
}
