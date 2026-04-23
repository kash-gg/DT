import type { Metadata } from 'next';
import WorkshopPill from '@/components/WorkshopPill';
import ScrollReveal from '@/components/ScrollReveal';
import MarqueeButton from '@/components/MarqueeButton';
import { workshops } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Workshops',
  description: 'Design Thinking workshops, corporate training, and facilitation programs by Prof. Bhavna Ambudkar.',
};

export default function WorkshopsPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 11, fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 24 }}>
              Training &amp; Facilitation
            </p>
            <h1 style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 700, lineHeight: 1 }}>
              Workshops &amp; <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Training</em>
            </h1>
          </ScrollReveal>
        </div>
      </section>


      {/* ─── INTRO ─── */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 300, lineHeight: 1.6, maxWidth: 800 }}>
              From half-day intensives for NGOs to semester-long integrations for B.Tech students,
              every workshop is designed around one principle: <strong style={{ fontWeight: 700 }}>learning by doing</strong>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── WORKSHOP PILLS ─── */}
      <section className="section-pad">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
              gap: 24,
            }}
          >
            {workshops.map(w => (
              <WorkshopPill key={w.id} workshop={w} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRING TO YOUR ORG ─── */}
      <section style={{ borderTop: '1px solid #0a0a0a', padding: '80px 0' }}>
        <div className="container">
          <ScrollReveal>
            <div className="two-col-grid">
              <div>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24 }}>
                  Bring a Workshop to Your <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Organisation</em>
                </h2>
                <p style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.7, marginBottom: 40 }}>
                  Whether you need a custom bootcamp for your engineering team, a keynote on design
                  thinking for leadership, or a semester-embedded program — I design every engagement
                  from scratch around your context.
                </p>
                <MarqueeButton label="Let's Design Something →" href="/contact" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {['Fully customized to your team and goals', 'In-person or hybrid delivery', 'Post-workshop follow-up and resources', 'Certificates for participants'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <span style={{ fontSize: 18, color: 'var(--cinnabar)' }}>✦</span>
                    <span style={{ fontSize: 16, fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
