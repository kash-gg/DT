import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Media & Recognition',
  description: 'Awards, honors, and public leadership of Dr. Bhavna Ambudkar in the domains of innovation and entrepreneurship.',
};

const AWARDS = [
  {
    id: 1,
    title: 'Leadership in Innovation and Entrepreneurship Award',
    organization: 'Divine HR Forum and NIPM Chakan',
    date: '28 March 2026',
    desc: 'Recognized for outstanding contributions to building regional innovation ecosystems and driving entrepreneurial readiness among engineering graduates.',
  },
  {
    id: 2,
    title: 'Entrepreneurship Excellence Award 2025',
    organization: 'ENSIN Forum',
    date: '2025',
    category: 'Women Entrepreneurship Enabler – Ecosystem Enabler (Individual)',
    desc: 'Awarded for sustained efforts in enabling women-led ventures and serving as a critical individual node in the Pune startup ecosystem.',
  },
];

const LEADERSHIP_ROLES = [
  {
    id: 1,
    title: 'National Master Trainer',
    organization: 'Wipro Technologies (Mission10X)',
    desc: 'Recognized as a National Master Trainer for transformative contributions to engineering education pedagogy. Engaged and trained over 25,000 engineering teachers across India.',
  },
];

const PUBLIC_ENGAGEMENTS = [
  {
    id: 1,
    title: 'Session Chair — Track on Entrepreneurship',
    organization: 'INDAM Conference 2026',
    date: '2026',
    desc: 'Served as the Session Chair for the Entrepreneurship track, moderating discussions on academic incubators, startup ecosystems, and the future of innovation policy.',
  },
];

export default function RecognitionPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-4xl">
            <ScrollReveal>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
                Media & <span className="font-light italic">Recognition</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#666] max-w-3xl">
                A timeline of awards, ecosystem leadership roles, and public engagements reflecting a career dedicated to education transformation and innovation excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── AWARDS & HONORS ─── */}
      <section className="section-pad bg-[#f2f0eb]">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-3xl font-display font-semibold mb-4 text-[#1c1c1c]">Awards & Honors</h2>
                <p className="text-[#666] text-lg">
                  Formal recognitions for ecosystem enabling and innovation leadership.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-8 flex flex-col gap-8">
              {AWARDS.map((award) => (
                <ScrollReveal key={award.id}>
                  <div className="bg-white border border-[#e0ddd6] p-8 rounded-sm hover:shadow-sm transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-medium text-[#1c1c1c] mb-1">{award.title}</h3>
                        <p className="text-sm font-semibold text-[var(--scheme-accent)] tracking-wide uppercase">
                          {award.organization}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-[#666] border border-[#e0ddd6] px-3 py-1 rounded-full whitespace-nowrap">
                        {award.date}
                      </span>
                    </div>
                    {award.category && (
                      <p className="text-sm font-medium text-[#1c1c1c] mb-3 italic">
                        Category: {award.category}
                      </p>
                    )}
                    <p className="text-[#666] leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP & IMPACT ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-3xl font-display font-semibold mb-4 text-[#1c1c1c]">Ecosystem Leadership</h2>
                <p className="text-[#666] text-lg">
                  Key roles shaping the landscape of engineering education and pedagogy.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-8 flex flex-col gap-8">
              {LEADERSHIP_ROLES.map((role) => (
                <ScrollReveal key={role.id}>
                  <div className="border-l-2 border-[var(--scheme-accent)] pl-8 py-2">
                    <h3 className="text-2xl font-medium text-[#1c1c1c] mb-2">{role.title}</h3>
                    <p className="text-sm font-semibold text-[#666] tracking-wide uppercase mb-4">
                      {role.organization}
                    </p>
                    <p className="text-[#1c1c1c] leading-relaxed text-lg">
                      {role.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PUBLIC ENGAGEMENTS ─── */}
      <section className="section-pad bg-[#1c1c1c] text-white">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <h2 className="text-3xl font-display font-semibold mb-4">Public Engagements</h2>
                <p className="text-[#a0a0a0] text-lg">
                  Conferences, invited forums, and speaking engagements.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="md:col-span-8 flex flex-col gap-8">
              {PUBLIC_ENGAGEMENTS.map((engagement) => (
                <ScrollReveal key={engagement.id}>
                  <div className="border border-[#333] p-8 rounded-sm bg-[#222]">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">{engagement.title}</h3>
                        <p className="text-sm font-semibold text-[var(--scheme-accent)] tracking-wide uppercase">
                          {engagement.organization}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-[#a0a0a0] border border-[#333] px-3 py-1 rounded-full whitespace-nowrap">
                        {engagement.date}
                      </span>
                    </div>
                    <p className="text-[#a0a0a0] leading-relaxed">
                      {engagement.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
