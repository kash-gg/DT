import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import Ticker from '@/components/Ticker';
import MarqueeButton from '@/components/MarqueeButton';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Prof. Bhavna Ambudkar — her philosophy, journey, and 15+ years shaping design thinking in Indian engineering education.',
};

const TIMELINE = [
  {
    year: '2014',
    institution: 'Symbiosis International University',
    degree: 'PhD in Innovation Management',
    desc: 'Doctoral research on building sustainable innovation ecosystems within Indian technical institutions. Thesis: "From Classroom to Startup: A Framework for Academic Innovation Culture."',
  },
  {
    year: '2007',
    institution: 'COEP Technological University, Pune',
    degree: 'M.Tech',
    desc: 'Post-graduate specialization in Computer Engineering with a focus on human-computer interaction and usability design principles.',
  },
  {
    year: '2002',
    institution: 'Pune University',
    degree: 'B.Tech Computer Engineering',
    desc: 'Foundation in engineering fundamentals. First exposure to the gap between technical skill-building and real-world human problem-solving.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', borderBottom: '1px solid #0a0a0a' }}>
        <div className="container" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="two-col-grid">
            {/* Left heading */}
            <div>
              <h1 style={{ fontSize: 'clamp(60px, 9vw, 120px)', lineHeight: 1, marginBottom: 8 }}>
                <span style={{ fontWeight: 700, display: 'block' }}>About</span>
                <em style={{ fontWeight: 300, fontStyle: 'italic', display: 'block' }}>Me</em>
              </h1>
            </div>

            {/* Right pull-quote box */}
            <div
              style={{
                border: '2px solid #0a0a0a',
                padding: 48,
                width: '100%',
                maxWidth: 400,
              }}
            >
              <p style={{ fontSize: 24, fontWeight: 300, fontStyle: 'italic', lineHeight: 1.5 }}>
                &quot;I don&apos;t teach Design Thinking. I make students live it.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="section-pad" style={{ borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <ScrollReveal>
            <p style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 300, lineHeight: 1.5, maxWidth: 900 }}>
              Design Thinking isn&apos;t a method. It&apos;s a mindset — one I&apos;ve spent{' '}
              <strong style={{ fontWeight: 700 }}>15 years</strong> helping engineers, founders, and
              institutions make their own.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Ticker />

      {/* ─── STORY ─── */}
      <section className="section-pad" style={{ borderBottom: '1px solid #0a0a0a' }}>
        <div className="container">
          <div className="two-col-grid">
            <ScrollReveal>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 32 }}>
                The <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Journey</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <div style={{ fontSize: 18, fontWeight: 300, lineHeight: 1.8 }}>
                <p style={{ marginBottom: 24 }}>
                  I began as an engineer who noticed a gap — technical proficiency alone was insufficient
                  for solving the messy, human problems the world actually needs solved. That observation
                  drove me to pursue design thinking not as a side interest, but as a central vocation.
                </p>
                <p style={{ marginBottom: 24 }}>
                  At SIT Pune, I&apos;ve built a culture where empathy isn&apos;t a soft skill but a
                  rigorous discipline. The Innovation Cell, the Quantum Thinking Lab, and now the AI +
                  Design curriculum — each is an experiment in closing the distance between classroom and consequence.
                </p>
                <p>
                  My research has been published in Scopus-indexed journals and presented internationally.
                  But the measurement I care about most: how many students graduate seeing problems
                  as opportunities and people as the starting point.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 80 }}>
              Qualifications
            </h2>
          </ScrollReveal>

          <div style={{ position: 'relative' }}>
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '20% 40px 1fr',
                    gap: '0 24px',
                    marginBottom: i < TIMELINE.length - 1 ? 64 : 0,
                    alignItems: 'start',
                  }}
                >
                  {/* Year */}
                  <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1, paddingTop: 4 }}>
                    {item.year}
                  </div>

                  {/* Line + node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="timeline-node" />
                    {i < TIMELINE.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: '#0a0a0a', minHeight: 120, marginTop: 8 }} />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{item.institution}</h3>
                    <p style={{ fontSize: 16, fontWeight: 500, marginBottom: 12, fontStyle: 'italic' }}>{item.degree}</p>
                    <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ marginTop: 80, display: 'flex', gap: 16 }}>
            <MarqueeButton label="View Research →" href="/research" />
            <MarqueeButton label="Let's Collaborate →" href="/contact" />
          </div>
        </div>
      </section>
    </>
  );
}
