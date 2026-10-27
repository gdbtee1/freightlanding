import { ArrowUpRight, MoveUpRight } from 'lucide-react'

export default function CompanyStory() {
  return (
    <section id="about" className="overflow-hidden bg-[#172329] text-[#F3F0E9]">
      <div className="grid lg:grid-cols-2">

        <div className="relative min-h-[390px] overflow-hidden sm:min-h-[520px] lg:min-h-[760px]">
          <img
            src={`${import.meta.env.BASE_URL}fleet.jpg`}
            alt="Commercial freight trucks and transportation fleet"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10191f]/80 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-5 right-5 flex items-end justify-between gap-5 sm:bottom-12 sm:left-10 sm:right-10">
            <span className="max-w-[220px] text-xs font-bold uppercase leading-relaxed tracking-[0.16em]">
              Built on trust.
              <br />
              Driven by integrity.
            </span>
            <MoveUpRight size={30} className="text-[#F16A3B]" />
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F16A3B]">
            <span className="h-2 w-2 bg-[#F16A3B]" />
            About Integrity Freight Solutions
          </div>

          <h2 className="mt-10 text-[clamp(3.2rem,6vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.075em]">
            FAMILY
            <br />
            OWNED.
            <br />
            <span className="text-[#F16A3B]">FLEET</span>
            <br />
            FOCUSED.
          </h2>

          <div className="mt-12 max-w-lg border-l-2 border-[#F16A3B] pl-6">
            <p className="text-lg leading-relaxed text-white/85">
              Integrity Freight Solutions is a Houston-based,
              family-owned freight and logistics company
              committed to moving freight safely, reliably,
              and on time.
            </p>
          </div>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-white/60">
            We're expanding our fleet and creating opportunities
            for dedicated drivers who want to be part of a
            growing operation. Through our transportation
            partnership with Walker Transportation, we work
            to serve customers with professionalism and care.
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
            We're grateful for the opportunity to grow, and
            we're looking for motivated people who share
            our commitment to safety, communication,
            and doing the job right.
          </p>

          <a
            href="#apply"
            className="mt-12 inline-flex w-fit items-center gap-8 border-b-2 border-[#F16A3B] pb-3 text-sm font-black uppercase tracking-[0.12em] transition hover:text-[#F16A3B]"
          >
            Grow With Us
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
