import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Mentorship & Impact',
  description: 'Student transformation, innovation mentoring, and startup outcomes driven by Dr. Bhavna Ambudkar.',
};

const MENTORING_PRINCIPLES = [
  {
    id: 1,
    title: 'Problem-First Thinking',
    desc: 'Teaching students to obsess over the problem before writing a single line of code or building a prototype. True innovation starts with deep understanding.',
  },
  {
    id: 2,
    title: 'Empathy-Driven Design',
    desc: 'Placing the end-user at the center of the engineering process. Solutions must not just be technically sound, but humanly viable.',
  },
  {
    id: 3,
    title: 'Applied Innovation',
    desc: 'Bridging the gap between theoretical frameworks and practical applications. Ideas are only as good as their execution in the real world.',
  },
  {
    id: 4,
    title: 'Industry Relevance',
    desc: 'Aligning student projects with actual market needs and industry challenges to ensure employability and entrepreneurial viability.',
  },
  {
    id: 5,
    title: 'Confidence Building',
    desc: 'Cultivating resilience and the courage to fail fast, iterate, and pitch ideas to industry leaders and investors with conviction.',
  },
];

const IMPACT_STORIES = [
  {
    id: 'iot-builders',
    team: 'IOT Builders',
    outcome: 'Built an IoT-based remote monitoring and control system for solar/electric dehydrators.',
    partner: 'EcoDehydrators Pune',
  },
  {
    id: 'codenova',
    team: 'CodeNova',
    outcome: 'Built a low-power decentralized off-grid communication device for emergency scenarios.',
    partner: 'Ni2Logic Pvt Ltd',
  },
  {
    id: 'trackblaze',
    team: 'TrackBlaze Squad',
    outcome: 'Designed a real-time camera tracking and gimbal control system for a moving UGV.',
    partner: 'Oxobot Robotics Pvt Ltd',
  },
  {
    id: 'ai-mavericks',
    team: 'AI Mavericks',
    outcome: 'Built an AI-based area-wise construction cost estimation system (web + mobile application).',
    partner: 'Pushpak Constro',
  },
  {
    id: 'nextgen',
    team: 'NextGen Builders',
    outcome: 'Created an Agentic AI system that converts complex medical findings into layman-friendly reports.',
    partner: 'Healthcare Sector (Applied Research)',
  },
];

export default function MentorshipPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
                Mentorship & <span className="font-light italic">Impact</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#666] max-w-3xl">
                As a chief mentor and innovation enabler, I guide students beyond academic boundaries—transforming ideas into viable products and empowering the next generation of problem solvers.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── HOW I MENTOR ─── */}
      <section className="section-pad bg-[#f2f0eb]">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-semibold mb-12">The Mentorship Philosophy</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENTORING_PRINCIPLES.map((principle) => (
              <ScrollReveal key={principle.id}>
                <div className="card-editorial h-full transition-transform duration-300 hover:-translate-y-1 bg-white">
                  <span className="text-[var(--scheme-accent)] font-semibold text-sm tracking-widest mb-4 block">
                    0{principle.id}
                  </span>
                  <h3 className="text-xl mb-3 font-medium text-[#1c1c1c]">{principle.title}</h3>
                  <p className="text-[#666] leading-relaxed text-sm">
                    {principle.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT STORIES ─── */}
      <section className="section-pad">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Student Startup & Innovation Outcomes</h2>
              <p className="text-[#666] text-lg">
                Selected impact stories from PuneSymbiHackathon and STARTUPCON 5.0, showcasing how student teams translate design thinking into tangible industry solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {IMPACT_STORIES.map((story) => (
              <ScrollReveal key={story.id}>
                <div className="border border-[#e0ddd6] p-8 rounded-sm hover:border-[var(--scheme-accent)] transition-colors h-full flex flex-col group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#f2f0eb] flex items-center justify-center text-[var(--scheme-accent)]">
                      ✦
                    </div>
                    <h3 className="text-2xl font-display font-semibold group-hover:text-[var(--scheme-accent)] transition-colors">
                      {story.team}
                    </h3>
                  </div>
                  <p className="text-[#1c1c1c] text-lg leading-relaxed mb-6 flex-grow">
                    {story.outcome}
                  </p>
                  <div className="mt-auto pt-6 border-t border-[#f2f0eb]">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#666] mb-1">
                      Industry Partner / Context
                    </p>
                    <p className="text-sm font-medium text-[#1c1c1c]">
                      {story.partner}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
