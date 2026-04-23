import type { Metadata } from 'next';
import ExpertiseCard from '@/components/ExpertiseCard';
import ScrollReveal from '@/components/ScrollReveal';
import MarqueeButton from '@/components/MarqueeButton';
import { expertise } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Design Thinking, Innovation, AI in Education, Research — explore Prof. Bhavna Ambudkar\'s areas of expertise.',
};

export default function ExpertisePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 24 }}>
              What I Do
            </p>
            <h1 style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, lineHeight: 1 }}>
              Areas of <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Expertise</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>


      {/* ─── GRID ─── */}
      <section className="section-pad">
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: 0 }}
          >
            {expertise.map(card => (
              <ExpertiseCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ borderTop: '1px solid #0a0a0a', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.1 }}>
                Interested in a <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Workshop?</em>
              </h2>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <MarqueeButton label="View Workshops →" href="/workshops" />
                <MarqueeButton label="Get In Touch →" href="/contact" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
