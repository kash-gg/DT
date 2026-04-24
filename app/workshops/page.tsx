import type { Metadata } from 'next';
import Link from 'next/link';
import WorkshopPill from '@/components/WorkshopPill';
import { workshops } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Workshops',
  description: 'Design Thinking workshops, corporate training, and facilitation programs by Prof. Bhavna Ambudkar.',
};

export default function WorkshopsPage() {
  return (
    <>
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--scheme-accent)] mb-4">
              Training & Facilitation
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
              Workshops & <span className="font-light italic">Training</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              From half-day intensives for NGOs to semester-long integrations for B.Tech students,
              every workshop is designed around one principle: <strong className="font-medium text-[#1c1c1c]">learning by doing</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workshops.map(w => (
              <WorkshopPill key={w.id} workshop={w} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[#e0ddd6] bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl font-semibold mb-6">
                Bring a Workshop to Your <span className="font-light italic">Organisation</span>
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Whether you need a custom bootcamp for your engineering team, a keynote on design
                thinking for leadership, or a semester-embedded program — I design every engagement
                from scratch around your context.
              </p>
              <Link href="/contact" className="academic-btn">
                Request a Proposal
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {['Fully customized to your team and goals', 'In-person or hybrid delivery', 'Post-workshop follow-up and resources', 'Certificates for participants'].map(item => (
                <div key={item} className="flex gap-4 items-center border-b border-[#e0ddd6] pb-4 last:border-0">
                  <span className="text-[var(--scheme-accent)] font-serif text-xl">✦</span>
                  <span className="text-lg text-[#1c1c1c]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
