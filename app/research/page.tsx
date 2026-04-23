import type { Metadata } from 'next';
import PublicationRow from '@/components/PublicationRow';
import ScrollReveal from '@/components/ScrollReveal';
import MarqueeButton from '@/components/MarqueeButton';
import { publications } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Scopus-indexed publications, patents, and academic writing by Prof. Bhavna Ambudkar on design thinking, innovation, and engineering education.',
};

export default function ResearchPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 24 }}>
              Academic Work
            </p>
            <h1 style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, lineHeight: 1 }}>
              Research &amp; <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Publications</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>


      {/* ─── STATS BAR ─── */}
      <section style={{ padding: '48px 0', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
            {[
              { n: '12', l: 'Publications' },
              { n: '2', l: 'Patents Filed' },
              { n: '40+', l: 'Citations' },
              { n: 'Scopus', l: 'Indexed' },
            ].map(s => (
              <div key={s.l}>
                <span style={{ fontSize: 40, fontWeight: 700, display: 'block', lineHeight: 1 }}>{s.n}</span>
                <span style={{ fontSize: 12, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PUBLICATIONS LIST ─── */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginBottom: 8 }}>
              Selected <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Publications</em>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, marginBottom: 48 }}>
              Peer-reviewed journals, conference proceedings, and academic writing.
            </p>
          </ScrollReveal>

          <div>
            {publications.map(pub => (
              <PublicationRow key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ borderTop: '1px solid #0a0a0a', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.1 }}>
                Interested in <em style={{ fontStyle: 'italic', fontWeight: 300 }}>collaboration?</em>
              </h2>
              <MarqueeButton label="Contact Me →" href="/contact" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
