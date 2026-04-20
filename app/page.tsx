import type { Metadata } from 'next';
import Ticker from '@/components/Ticker';
import MarqueeButton from '@/components/MarqueeButton';
import CounterStat from '@/components/CounterStat';
import ScrollReveal from '@/components/ScrollReveal';
import HeroText from '@/components/HeroText';

export const metadata: Metadata = {
  title: 'Bhavna Ambudkar — Design Thinking Professor',
  description:
    'Prof. Bhavna Ambudkar is a Design Thinking educator, innovation catalyst, and research scholar at Symbiosis Institute of Technology, Pune.',
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero-section">
        <div className="container" style={{ paddingTop: 80, paddingBottom: 40, flex: 1 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 48,
            }}
          >
            Professor &amp; Innovation Catalyst
          </p>

          {/* Asymmetric hero grid */}
          <div className="hero-grid">
            {/* Left: Big name */}
            <div>
              <HeroText />
              <div className="divider" style={{ margin: '32px 0 24px' }} />
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}
              >
                Design Thinking ✦ SIT Pune
              </p>
            </div>

            {/* Right: Squircle + CTAs */}
            <div className="flex flex-col items-center gap-8">
              <div className="hero-squircle" style={{ width: 320, height: 380 }}>
                <span style={{ fontSize: 72, fontWeight: 700 }}>BA</span>
              </div>

              <div className="flex gap-4 flex-wrap justify-center">
                <MarqueeButton label="View Work →" href="/projects" />
                <MarqueeButton label="Let's Collaborate →" href="/contact" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <Ticker />
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="divider" />

      {/* ─── INTRO / STATS ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="two-col-grid">
            {/* Stats cluster */}
            <ScrollReveal>
              <div className="stats-grid">
                <CounterStat value={15} suffix="+" label="Years of Experience" />
                <div className="v-divider stats-vdivider" />
                <CounterStat value={500} suffix="+" label="Students Mentored" />
                <div className="stats-hdivider" />
                <CounterStat value={80} suffix="+" label="Workshops Conducted" />
                <div className="v-divider stats-vdivider-2" />
                <CounterStat value={12} label="Research Publications" />
              </div>
            </ScrollReveal>

            {/* Text + CTA */}
            <ScrollReveal>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 300,
                  lineHeight: 1.7,
                  marginBottom: 40,
                }}
              >
                Bhavna Ambudkar is a Design Thinking educator, innovation catalyst, and research
                scholar at Symbiosis Institute of Technology, Pune. With over 15 years shaping how
                engineers think, empathize, and build — she bridges the gap between academic rigor
                and real-world impact.
              </p>
              <MarqueeButton label="Read My Story →" href="/about" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TICKER 2 ─── */}
      <Ticker />

      {/* ─── EXPERTISE TEASER ─── */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
              <h2 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 700, lineHeight: 1 }}>
                Areas of <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Expertise</em>
              </h2>
              <MarqueeButton label="All Expertise →" href="/expertise" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
