import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import HeroText from '@/components/HeroText';
import EditableText from '@/components/EditableText';
import { expertise, publications, workshops } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Bhavna Ambudkar — Design Thinking Professor',
  description:
    'Prof. Bhavna Ambudkar is a Design Thinking educator, innovation catalyst, and research scholar at Symbiosis Institute of Technology, Pune.',
};

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container">
          <div className="max-w-4xl">
            <EditableText
              id="hero-subtitle"
              defaultText="Professor & Innovation Catalyst"
              as="p"
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                color: 'var(--scheme-accent)'
              }}
            />
            
            <HeroText />
            
            <EditableText
              id="hero-role"
              defaultText="Symbiosis Institute of Technology, Pune"
              as="p"
              style={{
                fontSize: '1.2rem',
                fontWeight: 400,
                color: '#666',
                marginTop: '1rem',
                marginBottom: '2.5rem'
              }}
            />

            <div className="flex gap-4">
              <Link href="/research" className="academic-btn">
                View Research
              </Link>
              <Link href="/about" className="academic-btn-outline">
                Read Biography
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDIBILITY STRIP ─── */}
      <section className="border-y border-[#e0ddd6] py-6 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium text-[#666] tracking-wide uppercase">
            <span>Wipro Mission10X Master Trainer</span>
            <span className="hidden md:inline text-[#e0ddd6]">|</span>
            <span>Head of EPIC (SIT Pune)</span>
            <span className="hidden md:inline text-[#e0ddd6]">|</span>
            <span>25+ Years Experience</span>
            <span className="hidden md:inline text-[#e0ddd6]">|</span>
            <span>AICTE IDEA Lab Leader</span>
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-display font-semibold mb-6">About</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl leading-relaxed mb-6 text-[#1c1c1c]">
                Bhavna Ambudkar is a Design Thinking educator, innovation catalyst, and research
                scholar at Symbiosis Institute of Technology, Pune. With over 15 years shaping how
                engineers think, empathize, and build, she bridges the gap between academic rigor
                and real-world impact.
              </p>
              <p className="text-lg leading-relaxed text-[#666] mb-8">
                As the Head of EPIC (Entrepreneurship Promotion & Innovation Cell), she has been instrumental in 
                cultivating a culture of startup thinking among engineering students. She has personally trained over 
                25,000 engineering faculty across India as a National Master Trainer for Wipro Mission10X.
              </p>
              <Link href="/about" className="font-medium text-[var(--scheme-accent)] hover:underline underline-offset-4">
                Read full biography →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="section-pad bg-[#f2f0eb]">
        <div className="container">
          <div className="mb-12 flex justify-between items-end">
            <h2 className="text-3xl font-display font-semibold">Featured Expertise</h2>
            <Link href="/expertise" className="text-sm font-medium hover:text-[var(--scheme-accent)]">All Expertise →</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.slice(0, 3).map((item) => (
              <div key={item.id} className="card-editorial transition-transform duration-300 hover:-translate-y-1">
                <span className="text-[var(--scheme-accent)] font-semibold text-sm tracking-widest mb-4 block">{item.number}</span>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-[#666] mb-6 line-clamp-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs border border-[#e0ddd6] px-2 py-1 rounded text-[#666]">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESEARCH PREVIEW ─── */}
      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-display font-semibold mb-6">Recent Research</h2>
              <p className="text-[#666] mb-8">Selected Scopus-indexed publications focusing on design education, innovation management, and engineering pedagogy.</p>
              <Link href="/research" className="academic-btn-outline">
                View All Publications
              </Link>
            </div>
            <div className="md:col-span-8 flex flex-col gap-8">
              {publications.slice(0, 3).map((pub) => (
                <div key={pub.id} className="border-b border-[#e0ddd6] pb-8 last:border-0 last:pb-0">
                  <span className="text-sm font-medium text-[var(--scheme-accent)] mb-2 block">{pub.year}</span>
                  <h3 className="text-xl font-medium mb-3 hover:text-[var(--scheme-accent)] transition-colors">
                    <Link href={`/research`}>{pub.title}</Link>
                  </h3>
                  <p className="text-sm font-medium text-[#1c1c1c] mb-2">{pub.journal}</p>
                  <p className="text-[#666] text-sm line-clamp-2">{pub.abstract}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
