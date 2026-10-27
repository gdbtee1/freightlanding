import {
  ArrowUpRight,
  House,
  ShieldCheck,
  GraduationCap,
  Users,
  Truck,
  Zap
} from 'lucide-react'

const benefits = [
  {
    icon: House,
    title: 'HOME EVERY OTHER DAY',
    text: 'More time back home while building your driving career.'
  },
  {
    icon: Zap,
    title: 'IMMEDIATE HIRING',
    text: 'Opportunities available for motivated, dependable drivers.'
  },
  {
    icon: GraduationCap,
    title: 'FLATBED TRAINING',
    text: 'Flatbed experience is preferred, but training is available.'
  },
  {
    icon: ShieldCheck,
    title: 'SAFETY FIRST',
    text: 'We value drivers who take safety and responsible operations seriously.'
  },
  {
    icon: Users,
    title: 'FAMILY OWNED',
    text: 'Join a growing company built around people, trust, and reliability.'
  },
  {
    icon: Truck,
    title: 'GROWING FLEET',
    text: 'Be part of our expansion as we create more opportunities for drivers.'
  }
]

export default function DriverBenefits() {
  return (
    <section id="benefits" className="bg-[#EDE9E1] text-[#172329]">
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-10 lg:px-16 lg:py-32">

        <div className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#C84C27]">
          <span className="h-2 w-2 bg-[#C84C27]" />
          Why Drive With Us
        </div>

        <div className="mt-9 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="text-[clamp(3.4rem,9vw,9rem)] font-black uppercase leading-[0.83] tracking-[-0.085em]">
            MORE THAN
            <br />
            <span className="text-[#C84C27]">THE MILES.</span>
          </h2>

          <p className="max-w-sm text-base leading-relaxed text-[#536067]">
            The right opportunity is about more than getting
            behind the wheel. It's about being part of a team
            that's moving forward.
          </p>
        </div>

        <div className="mt-16 grid border-t border-[#172329]/30 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className="group border-b border-[#172329]/25 px-0 py-9 transition-colors hover:bg-[#E4DED3] md:px-6 lg:py-12"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#C84C27]"
                  />
                  <span className="text-xs font-bold text-[#172329]/40">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-12 max-w-xs text-2xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-3xl">
                  {benefit.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#536067]">
                  {benefit.text}
                </p>
              </article>
            )
          })}
        </div>

        <div className="mt-16 flex flex-col justify-between gap-7 border-t-2 border-[#172329] pt-9 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C84C27]">
              Now Recruiting
            </p>
            <h3 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              READY FOR THE NEXT MILE?
            </h3>
          </div>

          <a
            href="#apply"
            className="flex min-h-14 w-fit items-center gap-10 bg-[#C84C27] px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#172329]"
          >
            Apply Today <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  )
}
