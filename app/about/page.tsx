import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Prof. Bhavna Ambudkar — her philosophy, journey, and 15+ years shaping design thinking in Indian engineering education.',
};

const TIMELINE = [
  {
    year: 'PhD',
    institution: 'Sant Gadge Baba Amravati University',
    degree: 'Doctor of Philosophy — Electronics & Telecommunication Engineering',
    desc: 'Doctoral research in Electronics & Telecommunication Engineering, focusing on innovation, technology-enhanced pedagogy, and engineering education transformation in Indian technical institutions.',
  },
  {
    year: 'M.Tech',
    institution: 'COEP Technological University, Pune',
    degree: 'Post-Graduate — Engineering',
    desc: 'Post-graduate specialization with a focus on electronics and advanced engineering principles, building the foundation for subsequent research and academic leadership roles.',
  },
  {
    year: '1991',
    institution: 'College of Engineering, Badnera',
    degree: 'B.Tech — Electronics Engineering',
    desc: 'Undergraduate degree in Electronics Engineering (1987–1991). First exposure to the gap between technical skill-building and real-world problem-solving — the spark that led to a lifelong pursuit of human-centered engineering education.',
  },
];

const EXPERIENCE = [
  {
    period: 'May 2023 — Present',
    role: 'Professor & Head',
    org: 'Symbiosis Institute of Technology (SIT), Pune',
    desc: 'Leads academic and administrative functions as Professor & Head, while simultaneously serving as Incharge of EPIC (Entrepreneurship Promotion & Innovation Cell), driving startup culture and industry-academia collaboration.',
  },
  {
    period: 'Sep 2022 — May 2023',
    role: 'Professor & Coordinator — Entrepreneurship Development & Innovation Cell',
    org: 'Dr. D.Y. Patil Institute of Technology, Pimpri, Pune',
    desc: 'Coordinated the Entrepreneurship Development Startup & Innovation Cell, mentoring student ventures and building an ecosystem for emerging entrepreneurs within the institution.',
  },
  {
    period: 'Jan 2015 — May 2023',
    role: 'Professor & Dean — Industry Institute & Alumni Interaction',
    org: 'Dr. D.Y. Patil Institute of Engineering & Technology, Pune',
    desc: 'Led industry-institute interaction initiatives as Dean, establishing live project partnerships, alumni networks, and bridging the gap between academic learning and industry requirements across engineering disciplines.',
  },
  {
    period: '2009 — 2012',
    role: 'National Master Trainer',
    org: 'Wipro Mission10X',
    desc: 'Nationally recognized as a Master Trainer for Wipro\'s Mission10X initiative, personally training over 25,000 engineering faculty members across India in technology-enhanced and learner-centered pedagogical methods.',
  },
  {
    period: '1998 — 2023',
    role: 'Faculty & Administrative Roles',
    org: 'Dr. D.Y. Patil Institute, Pune',
    desc: '25 years of progressive academic service covering faculty, coordination, research supervision, and administrative leadership across multiple roles at Dr. DY Patil Institute.',
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
              <strong style={{ fontWeight: 700 }}>25+ years</strong> helping engineers, faculty, and
              institutions make their own.
            </p>
          </ScrollReveal>
        </div>
      </section>


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
                  I began as an Electronics & Telecommunication engineer — and from the very first semester, 
                  I noticed that technical skill alone was never enough to solve the messy, human problems 
                  the world actually needs solved. That observation drove me to pursue Design Thinking not as 
                  a side interest, but as a central vocation.
                </p>
                <p style={{ marginBottom: 24 }}>
                  Over 25 years, I&apos;ve served as faculty, Dean, and now Professor & Head at institutions 
                  including Dr. D.Y. Patil Institute and SIT Pune. As a National Master Trainer for Wipro 
                  Mission10X, I trained over{' '}
                  <strong style={{ fontWeight: 700 }}>25,000 engineering faculty</strong> across India — 
                  making technology-enhanced pedagogy accessible at national scale.
                </p>
                <p>
                  At SIT Pune, I lead EPIC (Entrepreneurship Promotion & Innovation Cell), organizing events 
                  like STARTUPCON 5.0 and PuneSymbiHackathon. Cambridge International Certified for Teachers 
                  and Trainers, and a recipient of the Leadership in Innovation and Entrepreneurship Award (2026) 
                  — I measure success by one thing: how many students graduate seeing people as the starting point.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="section-pad" style={{ borderBottom: '1px solid #0a0a0a' }}>
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
                  <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1, paddingTop: 4 }}>
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
        </div>
      </section>

      {/* ─── EXPERIENCE TIMELINE ─── */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 80 }}>
              Experience <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Timeline</em>
            </h2>
          </ScrollReveal>

          <div style={{ position: 'relative' }}>
            {EXPERIENCE.map((item, i) => (
              <ScrollReveal key={item.period}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '25% 40px 1fr',
                    gap: '0 24px',
                    marginBottom: i < EXPERIENCE.length - 1 ? 64 : 0,
                    alignItems: 'start',
                  }}
                >
                  {/* Period */}
                  <div style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.4, paddingTop: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.period}
                  </div>

                  {/* Line + node */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="timeline-node" />
                    {i < EXPERIENCE.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: '#0a0a0a', minHeight: 120, marginTop: 8 }} />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{item.role}</h3>
                    <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 12, fontStyle: 'italic' }}>{item.org}</p>
                    <p style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div style={{ marginTop: 80, display: 'flex', gap: 16 }}>
            <Link href="/research" className="academic-btn">View Research</Link>
            <Link href="/contact" className="academic-btn-outline">Let&apos;s Collaborate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
