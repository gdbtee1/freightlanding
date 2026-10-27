import { ArrowUpRight, ArrowDown, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#172329]">

      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}hero.jpg)`,
          backgroundPosition: "center 58%"
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10191f]/95 via-[#10191f]/65 to-[#10191f]/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10191f]/90 via-transparent to-[#10191f]/35" />

      <header className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16">
        <a href="#" className="flex flex-col leading-none">
          <span className="text-lg font-black tracking-[-0.07em] sm:text-2xl">
            INTEGRITY<span className="text-[#F16A3B]">.</span>
          </span>
          <span className="mt-1 text-[9px] font-bold tracking-[0.25em] text-white/70 sm:text-[10px]">
            FREIGHT SOLUTIONS
          </span>
        </a>

        <a
          href="#apply"
          className="flex items-center gap-2 border border-white/40 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] transition hover:bg-white hover:text-[#172329] sm:px-6 sm:text-xs"
        >
          Apply Now <ArrowUpRight size={16} />
        </a>
      </header>

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 pb-14 pt-16 sm:px-10 lg:px-16 lg:pb-20">

        <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
          <span className="h-2 w-2 bg-[#F16A3B]" />
          Now Hiring
          <span className="text-white/40">/</span>
          Houston, Texas
        </div>

        <h1 className="max-w-[1100px] text-[clamp(3.7rem,10.5vw,10rem)] font-black uppercase leading-[0.83] tracking-[-0.085em]">
          DRIVE WITH
          <br />
          <span className="text-[#F16A3B]">INTEGRITY.</span>
        </h1>

        <div className="mt-8 grid max-w-[1050px] gap-8 border-t border-white/30 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-xl">
              A growing fleet. A family-owned company. A better road ahead.
              Join our team of dedicated solo and team flatbed drivers.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-wider text-white/70">
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-[#F16A3B]" />
                Houston, TX
              </span>
              <span>Immediate Hiring</span>
              <span>Sign-On Bonus</span>
            </div>
          </div>

          <a
            href="#apply"
            className="flex w-fit min-h-14 items-center justify-between gap-12 bg-[#F16A3B] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-[#10191f] transition hover:bg-white"
          >
            Join Our Fleet <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/20 bg-[#10191f]/80">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 lg:grid-cols-4">
          {[
            ['$1,500–$2,000', 'Weekly Pay Range'],
            ['Solo + Team', 'Driving Opportunities'],
            ['Every Other Day', 'Home Time'],
            ['Training', 'Flatbed Experience Preferred'],
          ].map(([value, label]) => (
            <div key={label} className="border-b border-r border-white/15 px-5 py-6 last:border-r-0 sm:px-10 lg:border-b-0 lg:px-12">
              <p className="text-lg font-black uppercase tracking-tight sm:text-2xl">{value}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#apply"
        className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-3 bg-[#F16A3B] px-5 py-4 text-sm font-black uppercase text-[#10191f] shadow-2xl md:hidden"
      >
        Apply to Drive <ArrowUpRight size={18} />
      </a>
    </section>
  )
}
