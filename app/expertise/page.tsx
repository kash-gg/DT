import type { Metadata } from 'next';
import Link from 'next/link';
import ExpertiseCard from '@/components/ExpertiseCard';
import { expertise } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'Design Thinking, Innovation, AI in Education, Research — explore Prof. Bhavna Ambudkar\'s areas of expertise.',
};

export default function ExpertisePage() {
  return (
    <>
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--scheme-accent)] mb-4">
              What I Do
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
              Areas of <span className="font-light italic">Expertise</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Bridging engineering education, design thinking, and human-centered innovation through 25+ years of pedagogical and academic research.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map(card => (
              <ExpertiseCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-[#e0ddd6] bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#1c1c1c]">
              Interested in a <span className="font-light italic">Workshop?</span>
            </h2>
            <div className="flex gap-4">
              <Link href="/workshops" className="academic-btn-outline">
                View Workshops
              </Link>
              <Link href="/contact" className="academic-btn">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
