import { useState } from 'react'
import { ArrowUpRight, MapPin, Truck, ShieldCheck, Clock3 } from 'lucide-react'

// Replace with the business owner's verified application email.
const APPLICATION_EMAIL = 'REPLACE_WITH_OWNER_EMAIL'

export default function DriverApplication() {
  const [driverType, setDriverType] = useState('Solo Driver')
  const [submitting, setSubmitting] = useState(false)
  const isConfigured = APPLICATION_EMAIL.includes('@')

  function handleSubmit(event) {
    if (!isConfigured) {
      event.preventDefault()
      alert('The application email must be configured before this form can accept submissions.')
      return
    }
    setSubmitting(true)
  }

  return (
    <section
      id="apply"
      className="relative overflow-hidden bg-[#121E24] px-5 py-24 pb-36 text-[#F3F0E9] sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden select-none text-[22vw] font-black leading-none tracking-[-0.1em] text-white/[0.025] lg:block">
        DRIVE
      </div>

      <div className="relative mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

        <div>
          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#F16A3B]">
            <span className="h-2 w-2 bg-[#F16A3B]" />
            Driver Recruitment / Houston, TX
          </div>

          <h2 className="mt-9 text-[clamp(3.5rem,7vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">
            YOUR
            <br />
            NEXT MILE
            <br />
            <span className="text-[#F16A3B]">STARTS</span>
            <br />
            HERE.
          </h2>

          <p className="mt-9 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
            Integrity Freight Solutions is expanding its fleet.
            We're looking for dependable solo and team flatbed drivers
            who are ready to grow with a family-owned company.
          </p>

          <div className="mt-12 border-t border-white/20">
            {[
              [Truck, 'Solo & Team Drivers Needed'],
              [Clock3, 'Immediate Hiring Opportunities'],
              [ShieldCheck, 'Safety-Oriented Company'],
              [MapPin, 'Houston, Texas'],
            ].map(([Icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-4 border-b border-white/20 py-5"
              >
                <Icon size={21} strokeWidth={1.6} className="shrink-0 text-[#F16A3B]" />
                <span className="text-sm font-bold uppercase tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t-4 border-[#F16A3B] bg-[#EDE9E1] p-5 text-[#172329] sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#C84C27]">
                Apply to Drive
              </p>
              <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl">
                JOIN OUR FLEET.
              </h3>
            </div>
            <Truck size={31} strokeWidth={1.4} className="text-[#C84C27]" />
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#59636A]">
            Tell us a little about yourself. Our team can review
            your information and discuss available driving opportunities.
          </p>

          <form
            action={isConfigured ? `https://formsubmit.co/${APPLICATION_EMAIL}` : undefined}
            method="POST"
            onSubmit={handleSubmit}
            className="mt-9 space-y-6"
          >
            <input type="hidden" name="_subject" value="New Integrity Freight Solutions Driver Application" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label className="mb-3 block text-xs font-black uppercase tracking-wider">
                Driving Position *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Solo Driver', 'Team Driver'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setDriverType(type)}
                    aria-pressed={driverType === type}
                    className={`min-h-13 border px-3 py-4 text-xs font-black uppercase transition ${
                      driverType === type
                        ? 'border-[#C84C27] bg-[#C84C27] text-white'
                        : 'border-[#172329]/25 text-[#172329] hover:border-[#C84C27]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <input type="hidden" name="Driving Position" value={driverType} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="applicant-name" className="mb-2 block text-xs font-black uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  id="applicant-name"
                  type="text"
                  name="Full Name"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none transition placeholder:text-[#172329]/40 focus:border-[#C84C27]"
                />
              </div>
              <div>
                <label htmlFor="applicant-phone" className="mb-2 block text-xs font-black uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  id="applicant-phone"
                  type="tel"
                  name="Phone"
                  autoComplete="tel"
                  required
                  placeholder="(555) 000-0000"
                  className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none transition placeholder:text-[#172329]/40 focus:border-[#C84C27]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="applicant-email" className="mb-2 block text-xs font-black uppercase tracking-wider">
                Email Address *
              </label>
              <input
                id="applicant-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none transition placeholder:text-[#172329]/40 focus:border-[#C84C27]"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="cdl-status" className="mb-2 block text-xs font-black uppercase tracking-wider">
                  CDL Status *
                </label>
                <select
                  id="cdl-status"
                  name="CDL Status"
                  required
                  defaultValue=""
                  className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none focus:border-[#C84C27]"
                >
                  <option value="" disabled>Select CDL status</option>
                  <option>Class A CDL</option>
                  <option>Other CDL</option>
                  <option>No CDL</option>
                </select>
              </div>

              <div>
                <label htmlFor="driving-experience" className="mb-2 block text-xs font-black uppercase tracking-wider">
                  Driving Experience *
                </label>
                <select
                  id="driving-experience"
                  name="Driving Experience"
                  required
                  defaultValue=""
                  className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none focus:border-[#C84C27]"
                >
                  <option value="" disabled>Select experience</option>
                  <option>Less than 1 year</option>
                  <option>1–2 years</option>
                  <option>3–5 years</option>
                  <option>5+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="flatbed-experience" className="mb-2 block text-xs font-black uppercase tracking-wider">
                Flatbed Experience *
              </label>
              <select
                id="flatbed-experience"
                name="Flatbed Experience"
                required
                defaultValue=""
                className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none focus:border-[#C84C27]"
              >
                <option value="" disabled>Select an option</option>
                <option>Yes, experienced</option>
                <option>Some experience</option>
                <option>No, interested in training</option>
              </select>
            </div>

            {driverType === 'Team Driver' && (
              <div>
                <label htmlFor="teammate-status" className="mb-2 block text-xs font-black uppercase tracking-wider">
                  Do You Have a Driving Partner?
                </label>
                <select
                  id="teammate-status"
                  name="Team Partner Status"
                  defaultValue=""
                  className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none focus:border-[#C84C27]"
                >
                  <option value="" disabled>Select an option</option>
                  <option>Yes, ready to apply together</option>
                  <option>No, looking for a team opportunity</option>
                </select>
              </div>
            )}

            <div>
              <label htmlFor="availability" className="mb-2 block text-xs font-black uppercase tracking-wider">
                When Can You Start?
              </label>
              <select
                id="availability"
                name="Availability"
                defaultValue=""
                className="w-full min-w-0 rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none focus:border-[#C84C27]"
              >
                <option value="" disabled>Select availability</option>
                <option>Immediately</option>
                <option>Within 1 week</option>
                <option>Within 2 weeks</option>
                <option>Later / Flexible</option>
              </select>
            </div>

            <div>
              <label htmlFor="applicant-message" className="mb-2 block text-xs font-black uppercase tracking-wider">
                Anything Else We Should Know?
              </label>
              <textarea
                id="applicant-message"
                name="Additional Information"
                rows="3"
                placeholder="Tell us about your background or ask a question..."
                className="w-full min-w-0 resize-y rounded-none border border-[#172329]/25 bg-transparent px-4 py-4 text-base outline-none placeholder:text-[#172329]/40 focus:border-[#C84C27]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting || !isConfigured}
              className="flex min-h-16 w-full items-center justify-between gap-4 bg-[#C84C27] px-6 py-5 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#172329] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Submitting...' : 'Submit Driver Application'}
              <ArrowUpRight size={22} />
            </button>

            {!isConfigured && (
              <p className="text-sm font-bold text-[#A83A20]">
                Setup required: add the owner's email address before publishing.
              </p>
            )}

            <p className="text-xs leading-relaxed text-[#59636A]">
              By submitting, you agree to be contacted by Integrity Freight Solutions
              about driving opportunities. This initial inquiry is not a job offer.
              Do not include sensitive documents or identification numbers.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
