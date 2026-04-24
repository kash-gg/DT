import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Consultancy & Advisory',
  description: 'Innovation strategy, design thinking facilitation, and ecosystem building advisory by Dr. Bhavna Ambudkar.',
};

const SERVICES = [
  {
    id: 1,
    title: 'Innovation & Entrepreneurship Ecosystem Building',
    desc: 'Strategic advisory for academic institutions looking to establish robust startup cells, incubators, and innovation labs from the ground up.',
  },
  {
    id: 2,
    title: 'Design Thinking Workshops & Facilitation',
    desc: 'Customized problem-solving sprints and empathy-driven design workshops for corporate teams, engineering cohorts, and management professionals.',
  },
  {
    id: 3,
    title: 'Student Innovation Programs & Hackathons',
    desc: 'End-to-end design, curation, and execution of high-impact hackathons (like PuneSymbiHackathon) and structured innovation challenges.',
  },
  {
    id: 4,
    title: 'Industry-Academia Collaboration Models',
    desc: 'Developing frameworks that bridge the skills gap, aligning curriculum outcomes with real-world industry requirements and live projects.',
  },
  {
    id: 5,
    title: 'Faculty Development & Teaching Transformation',
    desc: 'Empowering educators with technology-enhanced pedagogy and student-centered teaching models, drawing from experience training 25,000+ faculty.',
  },
  {
    id: 6,
    title: 'Startup Mentorship & Entrepreneurial Readiness',
    desc: 'Guiding early-stage founders and student teams from initial ideation and validation through prototyping and investor pitch readiness.',
  },
];

const AUDIENCE = [
  { role: 'Academic Institutions', need: 'Looking to set up EPIC cells, innovation labs, or faculty development.' },
  { role: 'Corporate R&D / HR', need: 'Seeking Design Thinking workshops for product teams or leadership.' },
  { role: 'Incubators & Startup Cells', need: 'Requiring structured mentorship frameworks and jury expertise.' },
  { role: 'Industry Partners', need: 'Wanting to engage with academic talent through sponsored hackathons.' },
];

const FLOW = [
  { step: '01', title: 'Discovery & Context', desc: 'Understanding your institutional goals, current ecosystem maturity, and specific innovation bottlenecks.' },
  { step: '02', title: 'Framework Design', desc: 'Curating a tailored curriculum, workshop structure, or ecosystem blueprint aligned with best practices.' },
  { step: '03', title: 'Execution & Facilitation', desc: 'Delivering the intervention—whether a 2-day bootcamp, a 48-hour hackathon, or semester-long mentoring.' },
  { step: '04', title: 'Impact Measurement', desc: 'Evaluating outcomes against predefined metrics such as prototype viability, faculty readiness, or startup incorporation.' },
];

export default function ConsultancyPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
                Consultancy & <span className="font-light italic">Advisory</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#666] max-w-3xl">
                Partnering with institutions, incubators, and industry leaders to design innovation frameworks, build entrepreneurial ecosystems, and transform how teams solve complex problems.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-semibold mb-12">Advisory Engagements</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <ScrollReveal key={service.id}>
                <div className="border-t-2 border-[#1c1c1c] pt-6 group">
                  <h3 className="text-xl font-medium mb-3 text-[#1c1c1c] group-hover:text-[var(--scheme-accent)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLABORATION MODEL ─── */}
      <section className="section-pad bg-[#1c1c1c] text-white">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">The Collaboration Model</h2>
                <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
                  A structured approach to ecosystem building, shifting from ad-hoc interventions to sustainable innovation frameworks.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-8">
              <div className="grid sm:grid-cols-2 gap-8">
                {FLOW.map((item) => (
                  <ScrollReveal key={item.step}>
                    <div className="border border-[#333] p-6 rounded-sm bg-[#222]">
                      <span className="text-[var(--scheme-accent)] font-serif italic text-2xl mb-4 block">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR & CTA ─── */}
      <section className="section-pad bg-[#f2f0eb]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Who is it for */}
            <div>
              <ScrollReveal>
                <h2 className="text-3xl font-display font-semibold mb-8">Who I Work With</h2>
              </ScrollReveal>
              <div className="flex flex-col gap-6">
                {AUDIENCE.map((aud, i) => (
                  <ScrollReveal key={i}>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[var(--scheme-accent)] flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-medium text-[#1c1c1c] mb-1">{aud.role}</h4>
                        <p className="text-[#666] text-sm">{aud.need}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* CTA */}
            <ScrollReveal>
              <div className="bg-white p-10 border border-[#e0ddd6] rounded-sm text-center">
                <div className="w-16 h-16 mx-auto bg-[#faf9f6] rounded-full flex items-center justify-center text-2xl text-[var(--scheme-accent)] mb-6">
                  ✉
                </div>
                <h2 className="text-3xl font-display font-semibold mb-4">Let's Build Together</h2>
                <p className="text-[#666] mb-8 max-w-md mx-auto">
                  Whether you need a keynote speaker, an ecosystem architect, or a design thinking facilitator—let's discuss how we can create impact.
                </p>
                <Link href="/contact" className="academic-btn inline-flex">
                  Invite for Collaboration
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
