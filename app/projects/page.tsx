'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

const FILTERS = ['All', 'Innovation', 'Research', 'Mentorship'] as const;
type Filter = typeof FILTERS[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <>
      <section className="pt-32 pb-16 border-b border-[#e0ddd6]">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--scheme-accent)] mb-4">
              Selected Work
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1c1c1c] mb-6 leading-tight">
              Projects & <span className="font-light italic">Initiatives</span>
            </h1>
            <p className="text-xl text-[#666] leading-relaxed">
              Explore key initiatives shaping the future of engineering education, institutional innovation, and student entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 border-b border-[#e0ddd6] bg-white">
        <div className="container">
          <div className="flex gap-4 flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`px-4 py-2 text-sm font-medium border transition-colors rounded-sm ${active === f ? 'bg-[#1c1c1c] text-white border-[#1c1c1c]' : 'bg-transparent text-[#666] border-[#e0ddd6] hover:border-[#1c1c1c]'}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f2f0eb]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
