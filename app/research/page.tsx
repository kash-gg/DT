import type { Metadata } from 'next';
import Link from 'next/link';
import PublicationRow from '@/components/PublicationRow';
import { publications } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Scopus-indexed publications, patents, and academic writing by Prof. Bhavna Ambudkar on design thinking, innovation, and engineering education.',
};

export default function ResearchPage() {
  return (
    <>
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--scheme-accent)] mb-4">
              Academic Work
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
              Research & <span className="font-light italic">Publications</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Selected peer-reviewed journals, conference proceedings, and academic writing focusing on design education, innovation management, and engineering pedagogy.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-b border-[#e0ddd6] py-8 bg-white">
        <div className="container">
          <div className="flex flex-wrap gap-12 md:gap-24">
            {[
              { n: '12', l: 'Publications' },
              { n: '2', l: 'Patents Filed' },
              { n: '40+', l: 'Citations' },
              { n: 'Scopus', l: 'Indexed' },
            ].map(s => (
              <div key={s.l}>
                <span className="font-display text-4xl font-semibold text-[#1c1c1c] block mb-1">{s.n}</span>
                <span className="text-sm font-medium text-[#666] tracking-widest uppercase">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PUBLICATIONS LIST ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-col gap-12">
              {publications.map(pub => (
                <PublicationRow key={pub.id} pub={pub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad border-t border-[#e0ddd6] bg-[#f2f0eb]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1c1c1c]">
              Interested in <span className="font-light italic">collaboration?</span>
            </h2>
            <Link href="/contact" className="academic-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
